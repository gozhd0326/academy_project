import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Wom2 from "../image/Professor/WP2.jpg";
import Kioks1 from "../image/Kiosk/Kiosk1.jpg";
import { useEffect, useState } from "react";
import { getUserByProfessorIntro, getUserInfo } from "../api";

const Wrapper = styled.div`
   width: 100vw;
   height: 200vh;
   font-family: "GmarketSansMedium";
`;
const Section1 = styled.div`
   width: 100%;
   height: 30%;
   background-color: #0b4434;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;
const InnerWrap = styled.div`
   height: 100%;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const SecInner1 = styled.div`
   height: 75%;
   width: 35%;
   margin: 3rem;
   background-image: url(${Wom2});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
`;

const SecInner2 = styled.div`
   height: 100%;
   width: 40%;
   margin: 3rem;
   display: flex;
   flex-direction: column;
`;

const InfoWrap = styled.div`
   height: 80%;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   line-height: 4rem;
   color: white;
   & h1 {
      letter-spacing: 5px;
   }
   & p {
      font-size: 1.5rem;
   }
`;
const ButtonWrap = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 10%;
`;
const Button = styled.button`
   align-items: center;
   width: 30%;
   margin: 1rem;
   height: 40px;
   font-size: 1.5rem;
   letter-spacing: 3px;
   font-family: "GmarketSansMedium";
   background-color: white;
   border: 1px solid black;
   &:hover {
      cursor: pointer;
   }
   &:active {
      background-color: #6666;
   }
   &:nth-child(3) {
      width: 15%;
   }
`;

const Section2 = styled.div`
   width: 100%;
   height: 70%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const PfWrap = styled.div`
   width: 100%;
   height: 35%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const PfInfo1 = styled.div`
   width: 30%;
   height: 70%;
   margin: 0.5rem;
   border: 2px solid black;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
`;
const PfInfo2 = styled.div`
   width: 30%;
   height: 70%;
   margin: 0.5rem;
   border: 2px solid black;
   line-height: 1.5rem;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   & h2 {
      overflow-wrap: break-word;
      font-size: 1.5rem;
   }
`;

const PfLecture = styled.div`
   width: 100%;
   height: 60%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const PfCategory = styled.div`
   width: 75%;
   height: 90%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Lecture = styled.div`
   width: 80%;
   height: 90%;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   background-color: #f5d89a;
   border-radius: 1rem;
`;
const LectureTitle = styled.div`
   height: 10%;
   width: 100%;
   text-align: center;
   font-size: 2rem;
   margin: 1rem;
   font-weight: bold;
`;
const Inner = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   height: 90%;
   align-items: center;
   justify-content: center;
`;

const LectureImg = styled.div`
   background-image: url(${Kioks1});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;

export function KioskPf1() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("loginState from sessionStorage:", loginState);
   const [data, setData] = useState([]);

   async function getProfessor() {
      if (!loginState) {
         return;
      }
      try {
         const response = await fetch(
            `http://localhost:8080/api/apply/professor`,
            {
               method: "GET",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${loginState.token}`,
               },
            }
         );

         const responseData = await response.json();

         console.log(responseData);

         if (response.ok) {
            setData(responseData.data);
         } else {
            console.error(`Error: ${responseData.message}`);
         }
      } catch (error) {
         console.error("An error occurred", error);
      }
   }

   useEffect(() => {
      getProfessor("hyeonjooLee123@");
   }, []);
   return (
      <>
         <NavBar />
         <Wrapper>
            <Section1>
               <InnerWrap>
                  <SecInner1 />
                  <SecInner2>
                     <InfoWrap>
                        <h1>키오스크 강사</h1>
                        <h2>
                           {data.length > 0 && data[0].name
                              ? data[0].name
                              : "Loading..."}
                        </h2>
                        <p>
                           주문 또는 신청에 앞서 난감하거나 어려움을 겪고 계시진
                           않나요?
                           <br />
                           더이상 키오스크 앞에서 망설이고 싶지 않다면 모나카와
                           함께 성장해요!
                        </p>
                     </InfoWrap>
                     <ButtonWrap>
                        <Button>수강신청 하기</Button>
                        <Button>장바구니 담기</Button>
                        <Button>찜하기</Button>
                     </ButtonWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <Section2>
               <PfWrap>
                  <PfInfo1>
                     <h2>
                        {data.length > 0 ? data[0].name : "Loading..."}|{" "}
                        {data.length > 0 ? data[0].phoneNum : "Loading..."} |{" "}
                        <br />{" "}
                        {data.length > 0 ? data[0].birthDate : "Loading..."}{" "}
                        (41세) |
                        <br />
                        {data.length > 0 ? data[0].email : "Loading..."} <br />
                        {data.length > 0
                           ? data[0].professorResume
                           : "Loading..."}
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h2>
                        {data.length > 0
                           ? data[0].professorIntro
                           : "Loading..."}
                     </h2>
                  </PfInfo2>
               </PfWrap>
               <PfLecture>
                  <PfCategory>
                     <Lecture>
                        <LectureTitle>교수 강의 목록</LectureTitle>
                        <Inner>
                           <LectureImg />
                           <h2>&#60;키오스크 초급 1-1&#62;</h2>
                        </Inner>
                     </Lecture>
                  </PfCategory>
               </PfLecture>
            </Section2>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
