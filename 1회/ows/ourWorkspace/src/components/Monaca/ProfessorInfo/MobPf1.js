import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Wom5 from "../image/Professor/WP5.jpg";
import Mob1 from "../image/Mobile/Mobile1.jpg";
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
   background-image: url(${Wom5});
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
   background-image: url(${Mob1});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;

export function MobPf1() {
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
                        <h1>모바일 강사</h1>
                        <h2>정 수 빈</h2>
                        <p>스마트폰 세계로의 첫 발을 내딛어보세요.</p>
                        <p>
                           간단한 화면 터치부터 필요한 어플을 까는 것 까지,
                           <br />
                           여러분의 스마트폰 삶을 더욱 편리하게 만들어 드립니다!
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
                        정수빈 | 010-5432-18976 | <br />
                        1990년 03월 12일 (31세) | <br />
                        sb03@dw.com <br />
                        전공: 모바일 앱 개발 석사 학위 <br />
                        경력: 5년, iOS 및 Android 애플리케이션 개발자
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h4>
                        안녕하세요. 정수빈입니다.
                        <br />
                        이 강의는 여러분이 스마트폰을 더욱 효율적으로 활용할 수
                        있도록 <br /> 다양한 기능과 팁을 제공합니다.
                        <br /> 저는 항상 사용자들의 요구에 귀를 기울이고,
                        <br /> 최신 트렌드에 대한 이해를 바탕으로 강의를
                        진행하고 있습니다.
                        <br /> 이 강의를 통해 더욱 편리하고 즐거운 일상을 누릴
                        수 있도록 도와드리겠습니다.
                        <br />
                        또한 이 강의를 통해 디지털 기술에 대한 자신감을 키우고,
                        <br /> 더 나은 미래를 준비할 수 있는 능력을 키울 수 있을
                        것입니다.
                        <br /> 지금 바로 함께하고 새로운 세계를 탐험해보세요!
                     </h4>
                  </PfInfo2>
               </PfWrap>
               <PfLecture>
                  <PfCategory>
                     <Lecture>
                        <LectureTitle>교수 강의 목록</LectureTitle>
                        <Inner>
                           <LectureImg />

                           <h2>&#60;편리한 모바일 라이프&#62;</h2>
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
