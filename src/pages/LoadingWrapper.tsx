import { Box, CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react"


import NavDrawer from "../Components/NavDrawer";
import { page } from "../DataObjects/TPage";
import Timer from "./Countdown";
import CalendarPage from "./CalendarPage";
import Album from "./Album";
import { LogOut, SignIn } from "../Firebase/Firebase";


import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { GlobalContext } from "../context/GlobalContext";
import { database, DBRef } from "../Firebase/Firebase";
import IEvent from "../DataObjects/IEvent";
import { onValue } from "firebase/database";
import JsonToIEvent from "../Connectors/RealtimeDatabaseConnector";

const auth = getAuth();

export default function LoadingWrapper(props: any) {
    const ctx = useContext(GlobalContext);

    const [isLoaded, setIsLoaded] = useState<boolean>(true);
    const [page, setPage] = useState<page>("Countdown");
    const [user] = useAuthState(auth);

    function renderSwitch(page: page) {
        switch (page) {
            case "Countdown":
                return <Timer></Timer>;
            case "Calendar":
                return <CalendarPage></CalendarPage>;
            case "Album":
                return <Album></Album>;
            default:
                return <Timer></Timer>;
        }
    }

    const handlePageChange = (page: page) => {
        setPage(page);
    };

    //read Data from DB
    useEffect(() => {
        onValue(DBRef, (snapshot) => {
            const data = JsonToIEvent(snapshot.val());
            console.log(snapshot.val());

            if (data !== null) {
                ctx.setEvents(data);
            }
        })
    }, [])

    return (
        <>  {isLoaded ? (
            <>
                {user ? (
                    <>
                        <NavDrawer
                            handlePageChange={handlePageChange}
                            signOut={LogOut} />
                        {renderSwitch(page)}
                    </>
                ) :
                    (<SignIn></SignIn>)
                }
            </>
        ) :
            (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box >
            )
        }
        </>
    )

}