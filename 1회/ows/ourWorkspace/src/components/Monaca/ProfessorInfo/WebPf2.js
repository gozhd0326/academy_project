import styled from "styled-components";
import { NavBar } from "../NavBar";
import { MonacaInfo } from "../MonacaInfo";
import Man5 from "../image/Professor/MP5.jpg";
import web2 from "../image/Web/Web2.jpg";
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
   background-image: url(${Man5});
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
   width: 80%;
   height: 80%;
`;
const LectureImg = styled.div`
   background-image: url(${web2});
   background-repeat: no-repeat;
   background-size: contain;
   background-position: center;
   width: 50%;
   height: 45%;
   margin: 1rem;
`;

export function WebPf2() {
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
                        <h1>웹사이트 강사</h1>
                        <h2>정 현 우</h2>
                        <p>
                           어디든 직접 가지 않고 <br />
                           아늑한 집에서 즐기는 쇼핑
                        </p>
                        <p>
                           아직도 물건 사러 마트에 가시나요?
                           <br />
                           집에서 클릭 몇 번이면 물건이 집 앞까지!
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
                        정현우 | 016-5432-10981 | <br /> 1992년 09월 22일 (29세)
                        | <br /> hw09@dw.com <br />
                        전공: 데이터베이스 석사 학위 <br />
                        경력: 5년, 데이터 중심의 웹 애플리케이션 개발자
                     </h2>
                  </PfInfo1>
                  <PfInfo2>
                     <h4>
                        안녕하세요 웹사이트 강의 교수 정현우입니다.
                        <br />
                        본 강의를 통해서 웹사이트의 다양한 기능과 활용방법을
                        배울 수 있습니다.
                        <br /> 본 강의는 여러분이 웹사이트를 효과적으로 활용할
                        수 있는 <br /> 능력을 키우는 것이 중점입니다.
                        <br /> 디지털 시대에 필수적인 기술인 웹사이트 사용법을
                        익히며,
                        <br /> 여러분의 미래를 준비해보세요.
                        <br /> 이 강의를 통해 여러분은 웹사이트를 활용하는
                        능력을 기를 수 있을 것입니다. <br />
                        함께 성장하고 발전하는 과정을 경험해보시길 바랍니다.
                        <br />
                        지금바로 참여해보세요!
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
                              <h2>&#60;인터넷 생활 해킹&#62;</h2>
                           </Wrap>
                           <Wrap>
                              <LectureImg />
                              <h2>&#60;웹사이트 전문가 되기&#62;</h2>
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
