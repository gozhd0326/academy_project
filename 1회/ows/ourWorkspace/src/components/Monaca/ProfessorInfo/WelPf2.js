import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import man10 from "../image/Professor/MP10.jpg";
import wel3 from "../image/Welfare/Wel3.jpg";
import wel5 from "../image/Welfare/Wel5.jpg";
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
   background-image: url(${man10});
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
   width: 100%;
   height: 90%;
   align-items: center;
   justify-content: center;
`;

const Wrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 50%;
   height: 50%;
`;

const LectureImg = styled.div`
   background-image: url(${wel3});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;
const LectureImg2 = styled.div`
   background-image: url(${wel5});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 50%;
   margin: 1rem;
`;

export function WelPf2() {
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
                        <h2>한 태 석</h2>

                        <p>
                           직접가는 것보다 100배는 편한 <br />
                           웹으로 집에서 신청해보세요
                        </p>
                        <p>
                           직접 갔는데도 복잡한 절차 때문에 포기하셨나요?
                           <br />
                           해당 강의와 함께라면 간편하게 처리할 수 있는 노하우가
                           생깁니다!
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
                        한태석 | 015-6789-43211 | <br />
                        1989년 06월 09일 (32세) <br /> | ts06@dw.com <br />
                        전공: 사회복지 석사 학위 <br />
                        경력: 5년, 사회서비스를 위한 국가복지 솔루션 개발자
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h4>
                        반갑습니다. 한태석입니다.
                        <br />
                        우선 여러분을 강의를 통해 만나뵐 수 있게되어 기쁩니다.
                        <br /> 본 강의는 국가서비스를 온라인으로 이용하는 방법과
                        절차를 알려드립니다.
                        <br /> 디지털 시대에 들어서며, <br />
                        온라인으로 이러한 서비스를 이용하는 것이 중요시
                        되었습니다. <br /> 함께하며 디지털 시대에 필요한 스킬을
                        키워나갈 수 있도록 최선을 다하겠습니다.
                        <br /> 지금 바로 강의에 참여하여 미래를 준비하세요!
                     </h4>
                  </PfInfo2>
               </PfWrap>
               <PfLecture>
                  <PfCategory>
                     <Lecture>
                        <LectureTitle>교수 강의 목록</LectureTitle>
                        <Inner>
                           <Wrap>
                              <LectureImg />
                              <h2>&#60;시민참여의 시작&#62;</h2>
                           </Wrap>
                           <Wrap>
                              <LectureImg2 />
                              <h2>&#60;시민중심의 민원&#62;</h2>
                           </Wrap>
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
