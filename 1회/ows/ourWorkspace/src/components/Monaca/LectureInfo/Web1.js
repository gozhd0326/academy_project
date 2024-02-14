import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import web1 from "../image/Web/Web1.jpg";
import CheckEmoji from "../image/Check.jpg";
import Man from "../image/Man.jpg";
import Woman from "../image/Woman.jpg";
import Cap from "../image/Cap.jpg";
import LecPaper from "../image/LecPaper.jpg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Wom4 from "../image/Professor/WP4.jpg";

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
   background-image: url(${web1});
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
   &:nth-child(3) {
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
   /* border: 2px dashed black; */
   width: 18%;
   height: 100%;
   border-radius: 50%;
   background-image: url(${Wom4});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
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
export function Web1() {
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const navigate = useNavigate();

   const navigateToLectureNotice = () => {
      navigate("/lecture-notice");
   };

   const navigateToWeb1 = () => {
      navigate("/web-1");
   };

   const navigateToWeb1QnA = () => {
      navigate("/web1-qna");
   };

   const navigateToWebPf1 = () => {
      navigate("/webpf1");
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
                        <LectureCategory>웹사이트 사용법</LectureCategory>
                        <LectureName>&#60;웹생활의 즐거움&#62;</LectureName>
                        <br />
                        <CurrentList>현재 수강인구 수</CurrentList>
                        <ProfessorName>최윤서 교수님</ProfessorName>
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
               <Select>
                  <ButtonWrapper>
                     <SelectBtn onClick={navigateToWeb1}>강의 소개</SelectBtn>
                     <SelectBtn onClick={navigateToWeb1QnA}>QnA</SelectBtn>
                     <SelectBtn onClick={navigateToLectureNotice}>
                        강의 공지사항
                     </SelectBtn>
                  </ButtonWrapper>
               </Select>
               <Info>
                  <Header>
                     <h2>
                        인터넷의 세계를 더 잘 이해하고 활용할 수 있는 기회!
                     </h2>
                     <h2>무료 웹사이트 강의입니다.</h2>
                     <br />
                     <p>
                        어디서나 편리하게 <br />
                        웹사이트로 모든 걸 할 수 있는 시대
                     </p>
                     <br />
                     <p>
                        이 강의에서는 웹사이트의 기본 개념부터 실용적인 팁까지
                        배울 수 있어요.
                        <br />
                        지금 신청하고 디지털 세상에서 더 나은 경험을
                        만들어보세요!
                     </p>
                  </Header>
                  <Inner1>
                     <InTitle>
                        학습내용 엿보기 <Check />{" "}
                     </InTitle>
                     <InWrap>
                        <InText> ✔ 웹사이트 기본 개념알기</InText>
                        <InText> ✔ 상황별 쓰이는 목적 알아보기</InText>
                     </InWrap>
                     <InTitle>
                        수강 전 확인하기 <Check />
                     </InTitle>
                     <InWrap>
                        <SubText>
                           ✔ 기초수업이기 때문에 웹사이트에 대해 어느정도
                           이해도가 있으신 분은 디지털 네비게이를 추천드립니다.
                        </SubText>
                        <SubText>
                           ✔ 수강 전 디지털 기기에 대한 이해도가 부족해 어려움이
                           있다면 현 강의를 보시길 추천드립니다.
                        </SubText>
                     </InWrap>
                  </Inner1>
                  <Bar>
                     <p>초보자를 위한 웹사이트 강의</p>
                     <p>기초를 알아야 한 단계 성장 할 수 있다 &#128293;</p>
                  </Bar>
                  <Header2>
                     <h2>강의 목표</h2>
                     <br />
                     <p>웹사이트의 간편함을 이해하고</p>
                     <p>
                        우리와 같이 공존함에 있어 어려움이 없도록 기초를 잘 쌓을
                        수 있게!
                     </p>
                  </Header2>
                  <Inner2>
                     <SubIn1>
                        <h2>
                           웹사이트 강의 구성 <LecPaperEmoji />
                        </h2>
                        <SubInner>
                           <Now>
                              <p>✔ 웹생활의 즐거움</p>
                              <h6>현재 강의</h6>
                           </Now>
                           <p>✔ 인터넷 생활 해킹</p>
                           <p>✔ 웹사이트 전문가 되기</p>
                           <p>✔ 디지털 네비게이터</p>
                           <p>✔ 웹기초부터 고급까지</p>
                        </SubInner>
                     </SubIn1>
                     <SubIn2>
                        {" "}
                        <h2>
                           수강 대상 <ManEmoji /> <WomanEmoji />
                        </h2>
                        <SubInner>
                           <p>✔ 웹사이트를 잘 모르는 분</p>
                           <p>✔ 기초부터 시작하고 싶은 분</p>
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
                           <ProPic1 onClick={navigateToWebPf1} />
                           <h2 onClick={navigateToWebPf1}>최윤서</h2>
                           <h3>교수님</h3>
                        </Professor>
                        <ProIntro>
                           <h4>
                              안녕하세요 최윤서입니다.
                              <br />
                              웹사이트 사용법 강의에 참여해주셔서 감사합니다.
                              <br />
                              이 강의는 웹사이트를 보다 효과적으로 활용할 수
                              있는 다양한 전략과 팁을 제공합니다.
                              <br /> 제가 전달하는 내용이 여러분의 디지털 생활에
                              도움이 되기를 진심으로 바랍니다. 강의 내용은
                              실용적이고 유익하며, 여러분의 스킬을 향상시킬
                              것입니다.
                              <br /> 학생들의 성장을 위해 항상 노력하고 있으며,
                              여러분의 질문과 의견을 적극적으로 반영하고자
                              합니다. <br />
                              함께 하면서 새로운 지식을 습득하고, 디지털
                              환경에서 더욱 능숙해지는 여정을 함께하길 바랍니다.
                              지금 함께해요!
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
