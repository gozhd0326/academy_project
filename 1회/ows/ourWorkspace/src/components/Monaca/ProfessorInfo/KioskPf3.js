import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Wom1 from "../image/Professor/WP1.jpg";
import Kioks4 from "../image/Kiosk/Kiosk4.jpg";
import { useEffect } from "react";

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
   background-image: url(${Wom1});
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
   text-align: center;
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
   background-image: url(${Kioks4});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;

export function KioskPf3() {
   useEffect(() => {
      window.scrollTo(0, 0);
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
                        <h2>김 지 영</h2>
                        <p>
                           항상 사람이 많아 힘든 은행창구 <br />이 강의와
                           함께라면 간단한 일처리는 ATM기와 함께!
                        </p>

                        <p>
                           간단한 일 처리인데도 차례를 기다리고 계신가요?
                           <br />
                           은행창구가 일찍 문을 닫아도, 사람이 많아도 이 강의
                           하나면 만사 오케이
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
                        김지영 | 010-1234-56789 | <br /> 1975년 08월 15일 (48세)
                        | <br />
                        jy08@dw.com
                        <br /> 전공: 컴퓨터공학 석사 학위 <br />
                        경력: 10년, 키오스크 시스템 개발 및 운영 경험
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h4>
                        반갑습니다. 김지영입니다.
                        <br />
                        학생분들이 ATM을 사용함으로써 생활에서의 불편함을 줄이고
                        <br /> 효율성을 높일 수 있기를 바라고 있습니다.
                        <br /> 제 수업을 듣고 난 후 학생분들의 자신감 넘치는
                        멋진 모습을 기대하고 있습니다.
                        <br /> 실제로 변화를 느끼시면서 얼마나 기쁠지 상상해
                        보시면 더욱 좋을 것 같습니다.
                        <br />제 수업은 현대 사회에서 매우 중요한 생활 기술 중
                        하나를 가르치기 때문에
                        <br /> 여러분이 이를 습득하면서 자신의 경제적 자립성을
                        향상시킬 수 있을 것입니다.
                     </h4>
                  </PfInfo2>
               </PfWrap>
               <PfLecture>
                  <PfCategory>
                     <Lecture>
                        <LectureTitle>교수 강의 목록</LectureTitle>
                        <Inner>
                           <LectureImg />

                           <h2>&#60;ATM 사용방법&#62;</h2>
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
