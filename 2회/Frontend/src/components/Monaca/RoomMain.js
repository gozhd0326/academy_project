import { useEffect, useState } from "react";
import { getCurrentUserWithAuthorities } from "./api";
import { AdminRoom } from "./Admins/AdminRoom";
import { ProfessorRoom } from "./Professors/ProfessorRoom";
import { UserRoom } from "./Student/UserRoom";

export function RoomMain() {
  const [userRoles, setUserRole] = useState([]);

  useEffect(() => {
    const storedLoginState = JSON.parse(sessionStorage.getItem("loginState"));
    if (storedLoginState && storedLoginState.token) {
      fetchUserInfo(storedLoginState.token);
    }
  }, []);

  const fetchUserInfo = async (token) => {
    try {
      const response = await getCurrentUserWithAuthorities(token);
      const { authorityDtoSet } = response.data;
      const roles = authorityDtoSet.map((authority) => authority.authorityName);

      setUserRole(roles);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <div>
      {userRoles.includes("ROLE_ADMIN") ? (
        <AdminRoom />
      ) : userRoles.includes("ROLE_PROFESSOR") ? (
        <ProfessorRoom />
      ) : userRoles.some((role) => role === "ROLE_USER") ? (
        <UserRoom />
      ) : null}
    </div>
  );
}
