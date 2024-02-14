import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Man6 from "../image/Professor/MP6.jpg";
import mob2 from "../image/Mobile/Mobile2.jpg";
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
   background-image: url(${Man6});
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
   background-image: url(${mob2});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;

export function MobPf2() {
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
                        <h2>강 태 영</h2>
                        <p>
                           사진을 찍고, 메세지를 보내고 <br />
                           소셜미디어도 즐겨보세요!
                        </p>
                        <p>
                           위에 말 한 모든 게 아직도 어렵게 느껴지시나요?
                           <br />이 모든 것을 쉽게 배울 수 있는 기회를 놓치지
                           마세요!
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
                        강태영 | 018-9876-54327 | <br />
                        1974년 08월 07일 (47세) | <br /> ty08@dw.com <br />
                        전공: 인터랙션 디자인 박사 학위 <br />
                        경력: 12년, 사용자 중심의 모바일 앱 디자인 전문가
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h4>
                        안녕하세요 저는 모바일기기 사용법 강의를 맡고 있는
                        강태영입니다.
                        <br />
                        이 강의는 여러분이 스마트폰을 더욱 효율적으로
                        <br /> 활용할 수 있는 다양한 방법을 제시합니다.
                        <br /> 스마트폰은 현대 사회에서 필수불가결한 도구이며,
                        <br />
                        이를 올바르게 활용하는 데에는 몇 가지 요령이 필요합니다.
                        <br /> 제 강의를 통해 여러분은 이러한 요령을 배우고,
                        <br />
                        스마트폰을 더욱 능숙하게 다룰 수 있게 될 것입니다.
                        <br /> 함께하면서 여러분의 디지털 라이프를 업그레이드
                        하고, <br /> 더 나은미래를 준비하는 데 도움이 될
                        것입니다.
                        <br /> 지금 신청하고 새로운 기술을 배워보세요.
                     </h4>
                  </PfInfo2>
               </PfWrap>
               <PfLecture>
                  <PfCategory>
                     <Lecture>
                        <LectureTitle>교수 강의 목록</LectureTitle>
                        <Inner>
                           <LectureImg />

                           <h2>&#60;모바일 업그레이드&#62;</h2>
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
