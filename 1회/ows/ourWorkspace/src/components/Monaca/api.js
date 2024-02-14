// 회원가입, 회원관리 API (Authenticate, UserController)

export function login(user) {
   console.log(user);
   return fetch(`http://localhost:8080/api/authenticate`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   })
      .then((response) => {
         if (!response.ok) {
            throw new Error(`HTTP ERROR! Status : ${response.status}`);
         }
         return response.json();
      })
      .catch((error) => {
         console.error("FETCH ERROR :", error);
      });
}

export function signup(user) {
   return fetch(`http://localhost:8080/api/signup/user`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function professorsignup(user) {
   return fetch(`http://localhost:8080/api/signup/professor`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 모든 교수 정보 불러오기
export function getUserByProfessorIntro(user) {
   return fetch(`http://localhost:8080/api/apply/professor`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}
export function addAuthenticateByUser(user) {
   return fetch(`http://localhost:8080/api/user/authority/{loginId}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
   }).then((response) => response.json());
}

export function getUserInfo(loginId) {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   return fetch(`http://localhost:8080/api/user/${loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${loginState.token}`,
      },
   }).then((response) => response.json());
}

export function getCurrentUserWithAuthorities(user) {
   return fetch(`http://localhost:8080/api/user/authority`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAuthorities(user) {
   return fetch(`http://localhost:8080/api/user/authority/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function deleteByUserForSelf(user) {
   return fetch(`http://localhost:8080/api/user/delete/self`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteByUser(user) {
   return fetch(`http://localhost:8080/api/user/delete/loginId/{loginId}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getJoinDateByLoginId(user) {
   return fetch(`http://localhost:8080/api/user/joinDate/{loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getJoinDateForAllUsers(user) {
   return fetch(`http://localhost:8080/api/user/joinDate/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getDaysJoinedForSelf(user) {
   return fetch(`http://localhost:8080/api/user/joinDays`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getDaySinceJoined(user) {
   return fetch(`http://localhost:8080/api/daysSince/{loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getDaysSinceJoinedForAllUsers(user) {
   return fetch(`http://localhost:8080/api/daysSince/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getCurrentUserRatings(user) {
   return fetch(`http://localhost:8080/api/user/ratings`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllUsersRatings(user) {
   return fetch(`http://localhost:8080/api/user/ratings/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getUserRatingsByLoginId(user) {
   return fetch(`http://localhost:8080/api/user/{loginId}ratings`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getWishLectures(user) {
   return fetch(`http://localhost:8080/api/wishLecture/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function saveWishLecture(user) {
   return fetch(`http://localhost:8080/api/saveWishLecture/{lectureId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function removeWishLecture(user) {
   return fetch(`http://localhost:8080/api/removeWishLecture/{lectureId}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getTeachingLecturesByCurrentProfessor(user) {
   return fetch(`http://localhost:8080/api/teaching`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getTeachingLecturesByProfessorName(user) {
   return fetch(
      `http://localhost:8080/api/teaching/professorName/{professorName}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 공지사항(AdminNotice) API
export function getAllAdminNotice(user) {
   return fetch(`http://localhost:8080/api/adminNotice/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAdminNoticeById(user) {
   return fetch(`http://localhost:8080/api/adminNotice/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function createAdminNotice(user) {
   return fetch(`http://localhost:8080/api/adminNotice`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function updateAdminNotice(user) {
   return fetch(`http://localhost:8080/api/adminNotice/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteAdminNoticeById(user) {
   return fetch(`http://localhost:8080/api/adminNotice/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 출석 관리 (Attendance) API
export function saveAttendance(user) {
   return fetch(`http://localhost:8080/api/attendance`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllAttendance(user) {
   return fetch(`http://localhost:8080/api/adrate/all`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAttendanceByTimeStampOfYear(user) {
   return fetch(`http://localhost:8080/api/adrate/year/{year}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAttendanceByTimeStampOfMonth(user) {
   return fetch(`http://localhost:8080/api/adrate/year/{year}/month/{month}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAttendanceByTimeStampOfWeek(user) {
   return fetch(`http://localhost:8080/api/adrate/year/{year}/month/{week}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAttendanceByTimeStampOfDay(user) {
   return fetch(
      `http://localhost:8080/api/adrate/year/{year}/month/{month}/day/{day}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function getAttendanceByUser(user) {
   return fetch(`http://localhost:8080/api/myadrate`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAttendanceByUserIdAndTimeStampOfYear(user) {
   return fetch(`http://localhost:8080/api/myadrate/year/{year}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAttendanceByUserIdAndTimeStampOfMonth(user) {
   return fetch(`http://localhost:8080/api/myadrate/year/{year}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAttendanceByUserIdAndTimeStampOfWeek(user) {
   return fetch(
      `http://localhost:8080/api/myadrate/year/{year}/month/{month}/week/{week}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function getAttendanceByUserIdAndTimeStampOfDay(user) {
   return fetch(
      `http://localhost:8080/api/myadrate/year/{year}/month/{month}/day/{day}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function getAttendanceByLoginId(user) {
   return fetch(`http://localhost:8080/api/adrate/{loginId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAttendanceByLoginIdIdAndTimeStampOfYear(user) {
   return fetch(`http://localhost:8080api/adrate/{loginId}/year/{year}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAttendanceByLoginIdIdAndTimeStampOfMonth(user) {
   return fetch(
      `http://localhost:8080api/adrate/{loginId}/year/{year}/month/{month}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function getAttendanceByLoginIdIdAndTimeStampOfWeek(user) {
   return fetch(
      `http://localhost:8080/api/adrate/{loginId}/year/{year}/month/{month}/week/{week}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function getAttendanceByLoginIdIdAndTimeStampOfDay(user) {
   return fetch(
      `http://localhost:8080/api/adrate/{loginId}/year/{year}/month/{month}/day/{day}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 등급(Grade) API

export function createGrade(user) {
   return fetch(`http://localhost:8080/api/grade`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function updateGrade(user) {
   return fetch(`http://localhost:8080/api/grade/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}


export function getAllGrade(user) {
   return fetch(`http://localhost:8080/api/grade`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function calculateAndAssignGrade(user) {
   return fetch(`http://localhost:8080/api/grade/calculate/{lectureName}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의(Lecture) API

export function getAllLecture(user) {
   return fetch(`http://localhost:8080/api/lecture/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllLectureByCategoryName(user) {
   return fetch(
      `http://localhost:8080/api/lecture/lectureCategory/{categoryName}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function getAllLectureByProfessor(user) {
   return fetch(`http://localhost:8080/api/lecture/professor/{professorName}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllLectureByPaidLectures(user) {
   return fetch(`http://localhost:8080/api/lecture/paid`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllLectureByFreeLectures(user) {
   return fetch(`http://localhost:8080/api/lecture/free`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getLectureById(user) {
   return fetch(`http://localhost:8080/api/lecture/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function createLecture(user) {
   return fetch(`http://localhost:8080/api/lecture`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteLectureById(user) {
   return fetch(`http://localhost:8080/api/lecture/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 장바구니(LectureCart) API

export function getAllLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getLectureCartById(user) {
   return fetch(`http://localhost:8080/api/lectureCart/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function createLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function purchaseLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart/purchase/{id}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteAllLectureCart(user) {
   return fetch(`http://localhost:8080/api/lectureCart/delete/all`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteLectureCartById(user) {
   return fetch(`http://localhost:8080/api/lectureCart/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의실 API

export function getAllClassRoom(user) {
   return fetch(`http://localhost:8080/api/classRoom/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getClassRoomByClassRoomId(user) {
   return fetch(`http://localhost:8080/api/classRoom/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteClassRoomByClassRoomId(user) {
   return fetch(`http://localhost:8080/api/classRoom/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function updateClassRoom(user) {
   return fetch(`http://localhost:8080/api/classRoom/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function addLectureToClassRoom(user) {
   return fetch(`http://localhost:8080/api/classRoom/add/{lectureHistoryId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getStudentProgressByProfessor(user) {
   return fetch(`http://localhost:8080/api/progress/students`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 강의자료 API

export function getMaterialById(user) {
   return fetch(`http://localhost:8080/api/material/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function reservationMaterial(user) {
   return fetch(`http://localhost:8080/api/material`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function uploadMaterial(user) {
   return fetch(`http://localhost:8080/api/material/upload/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function updateMaterial(user) {
   return fetch(`http://localhost:8080/api/material/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteMaterial(user) {
   return fetch(`http://localhost:8080/api/material/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 메시지 휴지통 API
export function getAllMessageBin(user) {
   return fetch(`http://localhost:8080/api/messagebin`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 메시지 API

export function sendMessage(user) {
   return fetch(`http://localhost:8080/api/message`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 교수 공지 API

export function getAllProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getProfessorNoticeById(user) {
   return fetch(`http://localhost:8080/api/professorNotice/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAllProfessorNoticeByLecture(user) {
   return fetch(`http://localhost:8080/api/professorNotice/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function createProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function updateProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function deleteProfessorNotice(user) {
   return fetch(`http://localhost:8080/api/professorNotice/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// QandA API

export function getAllQandA(user) {
   return fetch(`http://localhost:8080/api/qanda/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getAllQandAByLecture(user) {
   return fetch(`http://localhost:8080/api/qanda/lectureName/{lectureName}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllQandAByUser(user) {
   return fetch(`http://localhost:8080/api/myqanda`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getQandAById(user) {
   return fetch(`http://localhost:8080/api/qanda/id/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function createQandA(user) {
   return fetch(`http://localhost:8080/api/qanda`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function updateQandA(user) {
   return fetch(`http://localhost:8080/api/qanda/update/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteQandA(user) {
   return fetch(`http://localhost:8080/api/qanda/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 수신 메시지 휴지통 API

export function getReceivedMessageBins(user) {
   return fetch(`http://localhost:8080/api/receivedMessageBin/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getReceivedMessageBinByReceivedMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/{receivedMessageBinId}`,
      {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function restoreAllReceivedMessageBins(user) {
   return fetch(`http://localhost:8080/api/receivedMessageBin/restore/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function restoreReceivedMessageBinByReceivedMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/restore/{receivedMessageBinId}`,
      {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function deleteAllReceivedMessageBins(user) {
   return fetch(`http://localhost:8080//api/receivedMessageBin/delete/all`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteReceivedMessageBinByReceivedMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/delete/{receivedMessageBinId}`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function deleteReceivedMessageBinOlderThan30Days(user) {
   return fetch(
      `http://localhost:8080/api/receivedMessageBin/delete/oldReceivedMessage`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 메세지 수신

export function getReceivedMessages(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function getReceivedMessageById(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteAllReceivedMessages(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/delete/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

export function deleteReceivedMessageByReceivedMessageId(user) {
   return fetch(`http://localhost:8080/api/receivedMessage/delete/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// QnA 답변 API
export function getAllReply(user) {
   return fetch(`http://localhost:8080/api/reply/all`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getAllReplyByQandA(user) {
   return fetch(`http://localhost:8080/api/reply/{qandaId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function createReply(user) {
   return fetch(`http://localhost:8080/api/reply/{qandaId}`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteReply(user) {
   return fetch(`http://localhost:8080/api/reply/delete/{id}`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}

// 수신함 휴지통
export function getSentMessageBins(user) {
   return fetch(`http://localhost:8080/api/sentMessageBin/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getSentMessageBinBySentMessageBinId(user) {
   return fetch(`http://localhost:8080/api/sentMessageBin/{sentMessageBinId}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function restoreAllSentMessageBins(user) {
   return fetch(`http://localhost:8080/api/sentMessageBin/restore/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function restoreSentMessageBinBySentMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/sentMessageBin/restore/{sentMessageBinId}`,
      {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function deleteAllSentMessageBin(user) {
   return fetch(`http://localhost:8080/api/sentMessageBin/delete/all`, {
      method: "DELETE",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteSentMessageBinBySentMessageBinId(user) {
   return fetch(
      `http://localhost:8080/api/sentMessageBin/delete/{sentMessageBinId}`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}
export function deleteSentMessageBinOlderThan30Days(user) {
   return fetch(
      `http://localhost:8080/api/sentMessageBin/delete/oldSentMessage`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
      }
   ).then((response) => response.json());
}

// 발신함 API

export function getSentMessages(user) {
   return fetch(`http://localhost:8080/api/sentMessage/list`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function getSentMessageById(user) {
   return fetch(`http://localhost:8080/api/sentMessage/{id}`, {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteAllSentMessages(user) {
   return fetch(`http://localhost:8080/api/sentMessage/delete/all`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
export function deleteSentMessageBySentMessageId(user) {
   return fetch(`http://localhost:8080/api/sentMessage/delete/{id}`, {
      method: "PUT",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
   }).then((response) => response.json());
}
