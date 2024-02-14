import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Kioks1 from "../image/Kiosk/Kiosk1.jpg";
import CheckEmoji from "../image/Check.jpg";
import Man from "../image/Man.jpg";
import Woman from "../image/Woman.jpg";
import Cap from "../image/Cap.jpg";
import LecPaper from "../image/LecPaper.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Wom2 from "../image/Professor/WP2.jpg";

const Wrapper = styled.div`
   width: 100vw;
   height: 300vh;
   font-family: "GmarketSansMedium";
`;

const Section1 = styled.div`
   width: 100%;
   height: 20%;
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
   background-image: url(${Kioks1});
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
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   line-height: 4rem;
   color: white;
`;
const LectureCategory = styled.div`
   font-size: 2.5rem;
`;
const LectureName = styled.div`
   font-size: 2.5rem;
`;

const CurrentList = styled.div`
   font-size: 2.5rem;
`;

const ProfessorName = styled.div`
   font-size: 2.5rem;
`;

const Section2 = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Select = styled.div`
   width: 85%;
   height: 10vh;
   display: flex;
   align-items: center;
   margin-top: 5vh;
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
   &:nth-child(2) {
      width: 15%;
   }
`;

const ButtonWrapper = styled.div`
   display: flex;
   align-items: center;
   width: 75%;
   margin: 5vh auto;
   height: 100%;
`;
const SelectBtn = styled.button`
   width: 150px;
   height: 40px;
   font-size: 1rem;
   font-weight: bold;
   letter-spacing: 3px;
   background-color: white;
   border: 1px solid black;
   font-family: "GmarketSansMedium";
   &:nth-child(1) {
      background-color: #0b4434;
      color: white;
   }
   &:hover {
      cursor: pointer;
   }
`;
const Info = styled.div`
   width: 85%;
   height: 90%;
   display: flex;
   flex-direction: column;
   align-items: center;
`;
const Header = styled.div`
   width: 75%;
   height: 30vh;
   text-align: left;
   margin: 5vh auto;
   & p {
      font-size: 1.5rem;
      line-height: 2.5rem;
   }
`;
const Inner1 = styled.div`
   width: 75%;
   height: 40vh;
   display: flex;
   flex-direction: column;
`;

const InTitle = styled.div`
   font-size: 1.5rem;
   display: flex;
   height: 5vh;
   align-items: center;
`;
const InWrap = styled.div`
   width: 100%;
   height: 10vh;
   display: flex;
   flex-direction: column;
   border: 2px solid black;
   justify-content: center;
   line-height: 3rem;
   padding-left: 1rem;
   margin-top: 10px;
   margin-bottom: 10px;
`;

const InText = styled.div`
   display: flex;
   font-size: 1.3rem;
   letter-spacing: 1px;
`;

const SubText = styled.div`
   display: flex;
   letter-spacing: 1px;
   font-size: 1rem;
`;

const Bar = styled.div`
   width: 75%;
   height: 50vh;
   display: flex;
   flex-direction: column;
   background-color: #0b4434;
   align-items: center;
   justify-content: center;
   font-size: 2rem;
   color: white;
   margin-top: 2rem;
`;

const Header2 = styled.div`
   width: 75%;
   height: 15vh;
   text-align: left;
   margin: 5vh auto;
   & p {
      font-size: 1.5rem;
      line-height: 2.5rem;
   }
`;
const Check = styled.div`
   display: flex;
   height: 70%;
   width: 3%;
   background-image: url(${CheckEmoji});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   margin-left: 1rem;
`;

const Inner2 = styled.div`
   width: 75%;
   height: 25vh;
   display: flex;
   margin: 0 auto;
   align-items: center;
   justify-content: center;
   margin-bottom: 5rem;
`;

const SubIn1 = styled.div`
   width: 100%;
   height: 150%;
   margin-right: 2rem;
   margin-top: 7.3rem;
   display: flex;
   flex-direction: column;
   & h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      display: flex;
   }
`;

const SubIn2 = styled.div`
   width: 100%;
   height: 150%;
   margin-right: 2rem;
   margin-top: 7.3rem;
   display: flex;
   flex-direction: column;
   & h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      display: flex;
   }
`;

const SubIn3 = styled.div`
   width: 100%;
   height: 150%;
   margin-right: 2rem;
   margin-top: 7.3rem;
   display: flex;
   flex-direction: column;
   & h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      display: flex;
   }
`;

const SubInner = styled.div`
   width: 100%;
   height: 80%;
   line-height: 2rem;
   border: 2px solid black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   font-size: 1.5rem;
   & p {
      margin: 10px;
      letter-spacing: 1.5px;
   }
`;

const Now = styled.div`
   display: flex;
   & h6 {
      color: #898989;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
   }
`;

const SubInner2 = styled.div`
   width: 95%;
   height: 80%;
   border: 2px solid black;
   display: flex;
   flex-direction: column;
   justify-content: center;
   & p {
      text-align: center;
      font-size: 1.5rem;
      margin: 10px;
      letter-spacing: 1.5px;
      line-height: 3rem;
   }
`;

const ProInfo = styled.div`
   width: 75%;
   height: 60%;
   display: flex;
   margin: 20px auto;
   align-items: center;
   justify-content: center;
`;

const ProProfile = styled.div`
   width: 100%;
   height: 80%;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

const Professor = styled.div`
   width: 50%;
   height: 30%;
   display: flex;
   align-items: center;
   & h2 {
      margin: 1rem;
      &:hover {
         cursor: pointer;
      }
   }

   & h3 {
      margin: 0.5rem;
      color: #898989;
   }
`;

const ProPic1 = styled.div`
   width: 17%;
   height: 100%;
   border-radius: 50%;
   background-image: url(${Wom2});
   background-repeat: no-repeat;
   background-position: center;
   background-size: contain;
   &:hover {
      cursor: pointer;
   }
`;

const ProIntro = styled.div`
   margin-top: 1rem;
   height: 70%;
   width: 100%;
   background-color: white;
   & h4 {
      line-height: 3rem;
      color: #5b5b5b;
   }
`;

const ManEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 10%;
   background-image: url(${Man});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: right;
   margin-left: 0.5rem;
`;

const WomanEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 10%;
   background-image: url(${Woman});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: left;
`;

const LecPaperEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 10%;
   background-image: url(${LecPaper});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: left;
   margin-left: 1rem;
`;

const CapEmoji = styled.div`
   display: flex;
   height: 100%;
   width: 15%;
   background-image: url(${Cap});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
`;
// 강의 상세 페이지
export function Kiosk1() {
   const loginState = JSON.parse(sessionStorage.getItem("loginState"));
   console.log("loginState from sessionStorage:", loginState);
   const [data, setData] = useState([]);
   const [participantCount, setParticipantCount] = useState(0);

   async function getLecture() {
      if (!loginState) {
         return;
      }
      try {
         const response = await fetch(
            `http://localhost:8080/api/lecture/id/{id}`, // 강의 정보를 가져오는 API 주소
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

  async function getParticipantCountByLectureName(lectureName) {
      return fetch(`http://localhost:8080/api/lecture/counts/lectureName/${lectureName}`, {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${loginState.token}`,
          },
      }).then((response) => response.json());
  }

  useEffect(() => {
   getLectureById(lectureName)
      .then(data => setLecture(data))
      .catch(error => console.error(error));
   
   getParticipantCountByLectureName(lectureName)
      .then(count => setParticipantCount(count))
      .catch(error => console.error(error));
}, [lectureName]);

useEffect(() => {
   window.scrollTo(0, 0);
}, []);

const navigate = useNavigate();

const navigateToLectureNotice = () => {
   navigate("/lecture-notice");
};

const navigateToKiosk1 = () => {
   navigate("/kiosk-1");
};

const navigateToKiosk1QnA = () => {
   navigate("/kiosk1-qna");
};

const navigateToKioskPf1 = () => {
   navigate("/kioskpf1");
};

return (
   <>
      <NavBar />
      <Wrapper>
         <Section1>
            <InnerWrap>
               <SecInner1 />
               <SecInner2>
                  <InfoWrap>
                     <LectureCategory> {data.length > 0 && data[0].lectureCategory.name
                           ? data[0].lectureCategory.name
                           : "Loading..."}</LectureCategory>
                     <LectureName>&#60;  {data.length > 0 && data[0].lectureName
                           ? data[0].lectureName
                           : "Loading..."}&#62;</LectureName>
                     <br />
                     <CurrentList>현재 수강인원 수: {participantCount}</CurrentList>
                     <ProfessorName>{data.length > 0 && data[0].professor.name
                           ? data[0].professor.name
                           : "Loading..."}</ProfessorName>
                  </InfoWrap>
                     <ButtonWrap>
                        <Button>장바구니 담기</Button>
                        <Button>찜하기</Button>
                     </ButtonWrap>
                  </SecInner2>
               </InnerWrap>
            </Section1>
            <Section2>
               <Select>
                  <ButtonWrapper>
                     <SelectBtn onClick={navigateToKiosk1}>강의 소개</SelectBtn>
                     <SelectBtn onClick={navigateToKiosk1QnA}>QnA</SelectBtn>
                     <SelectBtn onClick={navigateToLectureNotice}>
                        강의 공지사항
                     </SelectBtn>
                  </ButtonWrapper>
               </Select>
               <Info>
                  <Header>
                     <h2>시작을 향해 출발한 초급자를 위한</h2>
                     <h2>무료 키오스크 강의입니다.</h2>
                     <br />
                     <p>
                        어딜가나 사람대신 <br />
                        키오스크와 함께 주문해야 하는 시대가 왔습니다.
                     </p>
                     <br />
                     <p>
                        주문 또는 신청에 앞서 난감하거나 어려움을 겪고 계시진
                        않나요?
                        <br />
                        더이상 키오스크 앞에서 망설이고 싶지 않다면 모나카와
                        함께 성장해요!
                     </p>
                  </Header>
                  <Inner1>
                     <InTitle>
                        학습내용 엿보기 <Check />{" "}
                     </InTitle>
                     <InWrap>
                        <InText> ✔ 키오스크 전반적인 시스템 이해하기</InText>
                        <InText> ✔ 종류별 키오스크 분류 알아보기</InText>
                     </InWrap>
                     <InTitle>
                        수강 전 확인하기 <Check />
                     </InTitle>
                     <InWrap>
                        <SubText>
                           ✔ 기초수업이기 때문에 키오스크에 대해 어느정도
                           이해도가 있으신 분은 키오스크 마스터나 스마트한
                           대기를 추천 드립니다.
                        </SubText>
                        <SubText>
                           {" "}
                           ✔ 수강 전 디지털 기기에 대한 이해도가 부족해 어려움이
                           있다면 웹사이트 생활의 즐거움을 추천드립니다.
                        </SubText>
                     </InWrap>
                  </Inner1>
                  <Bar>
                     <p>초보자를 위한 키오스크 강의</p>
                     <p>기초를 알아야 한 단계 성장 할 수 있다 &#128293;</p>
                  </Bar>
                  <Header2>
                     <h2>강의 목표</h2>
                     <br />
                     <p>키오스크라는 게 왜 보편화가 되었는지 이해하고</p>
                     <p>
                        우리와 같이 공존함에 있어 어려움이 없도록 기초를 잘 쌓을
                        수 있게!
                     </p>
                  </Header2>
                  <Inner2>
                     <SubIn1>
                        <h2>
                           키오스크 강의 구성 <LecPaperEmoji />
                        </h2>
                        <SubInner>
                           <Now>
                              <p>✔ 키오스크 초급 1-1</p>
                              <h6>현재 강의</h6>
                           </Now>
                           <p>✔ 키오스크 초급 1-2</p>
                           <p>✔ 스마트한 대기</p>
                           <p>✔ 키오스크 마스터</p>
                           <p>✔ ATM 사용법</p>
                        </SubInner>
                     </SubIn1>
                     <SubIn2>
                        {" "}
                        <h2>
                           수강 대상 <ManEmoji /> <WomanEmoji />
                        </h2>
                        <SubInner>
                           <p>✔ 키오스크를 잘 모르는 분</p>
                           <p>✔ 기초부터 시작하고 싶은 분</p>
                           <p>✔ 추가 예정</p>
                        </SubInner>
                     </SubIn2>
                     <SubIn3>
                        {" "}
                        <h2>
                           듣기 전 필요한 지식 <CapEmoji />
                        </h2>
                        <SubInner2>
                           <p>
                              초급반이기 때문에 <br />
                              마음가짐만 있다면
                              <br /> 잘 모르더라도 <br /> 누구든 수강
                              가능합니다.
                           </p>
                        </SubInner2>
                     </SubIn3>
                  </Inner2>
                  <ProInfo>
                     <ProProfile>
                        <Professor>
                           <ProPic1 onClick={navigateToKioskPf1} />
                           <h2 onClick={navigateToKioskPf1}>이현주</h2>
                           <h3>교수님</h3>
                        </Professor>
                        <ProIntro>
                           <h4>
                              안녕하세요 저는 키오스크 사용법 강의를 맡고 있는
                              이현주입니다.
                              <br />
                              저는 항상 기술과 사람 사이의 교감에 큰 관심을
                              가지고 있었습니다.
                              <br /> 특히, 디지털 기술이 우리의 일상에 더욱
                              밀접하게 녹아들면서 사용자 경험이 얼마나
                              중요한지를 절실히 느끼게 되었습니다.
                              <br /> 이러한 관심과 열정으로 강의를 맡게 되었고,
                              여러분께 가르치는 것에 대해 큰 즐거움을 느끼고
                              있습니다.
                              <br /> 제 강의를 통해 여러분이 디지털 환경에서
                              더욱 자신감을 가지고 키오스크를 단순히 사용하는
                              것을 넘어서, <br />그 기술이 제공하는 가능성과
                              편의성을 깨닫는 데 도움을 드리고 싶습니다.
                              <br /> 함께 키오스크의 세계를 탐험하여 새로운
                              지식과 경험을 만들어 나가는 여정이 되기를 진심으로
                              바랍니다.
                           </h4>
                        </ProIntro>
                     </ProProfile>
                  </ProInfo>
               </Info>
            </Section2>
         </Wrapper>
         <MonacaInfo />
      </>
   );
}
