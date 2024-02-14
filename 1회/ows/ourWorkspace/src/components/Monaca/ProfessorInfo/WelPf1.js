import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Wom8 from "../image/Professor/WP8.jpg";
import Wel1 from "../image/Welfare/Wel1.jpg";
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
   background-image: url(${Wom8});
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
   background-image: url(${Wel1});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;

export function WelPf1() {
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
                        <h1>국가 복지 및 민원 신청법</h1>
                        <h2>손 미 경</h2>
                        <p>
                           항상 내가 가는 시간에는 사람이 많은 관공서
                           <br />
                           모나카와 함께하면 집에서도 편하게!
                        </p>
                        <p>
                           국가서비스를 온라인으로 편하게 이용하는 법을 배우고,
                           <br />
                           실무에 바로 적용할 수 있는 스킬까지!
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
                        손미경 | 017-8765-43213 | <br />
                        1971년 12월 10일 (36세) | <br />
                        mg12@dw.com <br />
                        전공: 공공정책 박사 학위 <br />
                        경력: 10년, 국가복지 프로젝트 기획 및 실행 경험
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h4>
                        안녕하세요 손미경입니다.
                        <br />
                        국가복지 신청과 민원신청관련 강의를 개강하여 매우
                        기쁩니다.
                        <br /> 본 강의는 국가 서비스를 온라인으로 이용하는
                        방법과 절차를 자세히 다룹니다.
                        <br /> 국가의 다양한 혜택을 효과적으로 신청할 수 있음에
                        도움이 되었으면 좋겠습니다.
                        <br /> 이러한 강의를 온라인으로 제공하는 것은 현
                        사회에서 매우 중요하다고 생각하며
                        <br /> 이에 대한 지식을 습득하는 것은 필수입니다.
                        <br />
                        함께 공부하며 실생활에 유용한 기술을 배우고
                        활용해봅시다.
                        <br /> 지금 바로 강의를 등록하세요!{" "}
                     </h4>
                  </PfInfo2>
               </PfWrap>
               <PfLecture>
                  <PfCategory>
                     <Lecture>
                        <LectureTitle>교수 강의 목록</LectureTitle>
                        <Inner>
                           <LectureImg />
                           <h2>&#60;복지체계 이해하기&#62;</h2>
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
