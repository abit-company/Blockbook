import React from 'react';
// import styled, { css } from 'styled-components';
// // import { navigateTo } from 'gatsby-link';
// import HomeImg from './abitbook-hero.svg';
// // import UiContext from 'components/UiContext';
// import bullet from './bullet.svg';
// import { Link } from '../components';

// export default () => (
//   <UiContext.Consumer>
//     {({ lastLocation }) => (
//       <HomeContainer>
//         <Hero />
//         <HeroMessageContainer>
//           <HeroMessage>
//             <Title>Blockbook</Title>
//             <SubTitle>An Introduction to Blockchain technology</SubTitle>
//             {!lastLocation ? (
//               <Button onClick={() => navigateTo('/book/introduction')}>
//                 Start reading
//               </Button>
//             ) : (
//               <Button onClick={() => navigateTo(lastLocation)}>
//                 Continue reading
//               </Button>
//             )}
//           </HeroMessage>
//         </HeroMessageContainer>
//         <div>
//           <About>
//             Everything you need to know to start exploring Blockchains and
//             cryptocurrencies. <br />
//             <span style={{ fontWeight: '400' }}>Free and open source.</span>
//           </About>
//           <Section>
//             <Bullet src={bullet} />
//             <SectionWrapper>
//               <SectionTitle>What is Blockbook</SectionTitle>
//               <SectionContent>
//                 It’s an experiment. We want to condense the knowledge of the
//                 blockchain community to create the definitive, adaptive guide on
//                 Blockchain technology.
//               </SectionContent>
//             </SectionWrapper>
//           </Section>
//           <Section reverse>
//             <Bullet src={bullet} reverse />
//             <SectionWrapper reverse>
//               <SectionTitle>Free and open source</SectionTitle>
//               <SectionContent>
//                 We believe the best way to achieve our goal is by allowing
//                 anyone to contribute to it. We want it to be free and accessible
//                 to everyone.
//               </SectionContent>
//             </SectionWrapper>
//           </Section>
//           <Section>
//             <Bullet src={bullet} />
//             <SectionWrapper>
//               <SectionTitle>About us</SectionTitle>
//               <SectionContent>
//                 We are blockchain lovers committed to making the world a more
//                 permissionless and distributed place. Check us out on{' '}
//                 <Link to="https://abit.company">abitcompany</Link>
//               </SectionContent>
//             </SectionWrapper>
//           </Section>
//         </div>
//       </HomeContainer>
//     )}
//   </UiContext.Consumer>
// );

// const About = styled.h3`
//   text-align: center;
//   font-size: 2.2rem;
//   font-weight: 300;
//   letter-spacing: 2px;
//   margin: 4rem 0;
//   @media only screen and (max-width: ${props => props.theme.maxHeroImg}) {
//     font-size: 2rem;
//   }
//   @media only screen and (max-width: ${props => props.theme.breakMobile}) {
//     margin-bottom: 2.5rem;
//   }
//   @media only screen and (max-width: ${props => props.theme.breakVerySmall}) {
//     font-size: 1.5rem;
//   }
// `;
// const Bullet = styled.img`
//   height: 100px;
//   margin: ${props => (props.reverse ? '0 0 0 40px' : '0 40px 0 0')};
//   @media only screen and (max-width: ${props => props.theme.breakMobile}) {
//     display: none;
//   }
// `;
// const SectionWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   ${props =>
//     props.reverse &&
//     css`
//       text-align: right;
//     `};
//   @media only screen and (max-width: ${props => props.theme.breakMobile}) {
//     text-align: center;
//   }
// `;
// const SubTitle = styled.h2`
//   font-size: 2.2rem;
//   font-weight: 300;
// `;
// const SectionTitle = styled.h3`
//   font-size: 2.2rem;
//   margin-bottom: 1rem;
//   font-weight: 300;
//   @media only screen and (max-width: ${props => props.theme.breakVerySmall}) {
//     font-size: 1.8rem;
//   }
// `;

// const Section = styled.section`
//   margin: 100px 0;
//   font-weight: 400;
//   display: flex;
//   ${props =>
//     props.reverse &&
//     css`
//       flex-direction: row-reverse;
//     `} align-items: center;
//   @media only screen and (max-width: ${props => props.theme.breakMobile}) {
//     margin: 40px 0;
//   }
// `;

// const SectionContent = styled.p`
//   line-height: 1.7rem;
//   font-size: 1.2rem;
//   margin-top: 0;
//   @media only screen and (max-width: ${props => props.theme.breakVerySmall}) {
//     font-size: 1rem;
//   }
// `;

// const HomeContainer = styled.div`
//   max-width: 760px;
//   margin: 0 auto;
//   padding: 0 30px;
//   min-height: 100vh;
//   letter-spacing: 2px;
// `;

// const HeroMessageContainer = styled.div`
//   max-width: 400px;
//   height: 700px;
//   display: flex;
//   flex-direction: column;
//   align-items: left;
//   justify-content: center;
//   @media only screen and (max-width: 1100px) {
//     margin-left: -50px;
//   }
//   @media only screen and (max-width: 900px) {
//     margin-left: 0;
//   }

//   @media only screen and (max-width: ${props => props.theme.breakMobile}) {
//     text-align: center;
//   }
// `;
// const HeroMessage = styled.div`
//   background-color: #fff;
//   border-radius: 5px;
//   display: inline-block;
//   padding: 10px;
// `;
// const Hero = styled.div`
//   width: 100%;
//   min-height: 700px;
//   z-index: -1;
//   background-image: url(${HomeImg});
//   background-repeat: no-repeat;
//   background-position: right;
//   position: absolute;
//   top: 0;
//   left: 0;
//   @media only screen and (max-width: ${props => props.theme.maxHeroImg}) {
//     background-size: cover;
//   }
// `;
// const Title = styled.h1`
//   font-size: 4.2rem;
//   color: ${props => props.theme.alwaysDark};
//   font-weight: 400;
//   letter-spacing: 2px;
//   margin: 0 0 1.5rem 0;

//   @media only screen and (max-width: ${props => props.theme.maxHeroImg}) {
//     font-size: 3rem;
//     max-width: 333px;
//   }
//   @media only screen and (max-width: ${props => props.theme.breakVerySmall}) {
//     font-size: 2rem;
//     max-width: 333px;
//   }
// `;

// const Button = styled.button`
//   display: inline-block;
//   font-size: 1.2rem;
//   color: #fff;
//   background-color: ${props => props.theme.mainColor};
//   padding: 0.8rem 1.6rem;
//   border-radius: 4px;
//   transition: background-color 0.3s ease;
//   box-sizing: border-box;
//   border: 1px solid transparent;
//   transition: box-shadow 0.25s;
//   max-width: 300px;
//   user-select: none;
//   vertical-align: middle;
//   letter-spacing: 2px;
//   text-transform: uppercase;
//   &:hover {
//     transition: 0.25s;
//     background-color: #fff;
//     border: 1px solid ${props => props.theme.mainColor};
//     cursor: pointer;
//     color: ${props => props.theme.mainColor};
//   }
// `;

const HomePage = () => <div>Hello</div>;

export default HomePage;
