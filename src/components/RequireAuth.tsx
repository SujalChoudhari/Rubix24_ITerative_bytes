import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import { usePocket } from "../contexts/PocketContext";
import { useEffect } from "react";

export const RequireAuth = () => {
    const { user } = usePocket();
    const location = useLocation();
    const toast = useToast()

    if (!user) {
        useEffect(() => {
            toast({
                title: 'User Not Logged In',
                description: "We cannot log you in. Sign in to continue",
                status: 'error',
                isClosable: true,
            })
        }, [])
        return (
            <Navigate to={{ pathname: "/signin" }} state={{ location }} replace />
        );
    }

    return <Outlet />;
};