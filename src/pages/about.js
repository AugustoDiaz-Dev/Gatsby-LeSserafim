import React from 'react'
import Layout from '../components/Layout'
import '../styles/about.module.css'

const About = () => {
    return (
        <Layout>
            <section className='aboutContainer'>
                <h2>우리에 대해</h2>
                <p>
                    Le Sserafim is a South Korean girl group formed by Source Music and HYBE. The group consists of five members: Sakura, Kim Chae-won, Huh Yun-jin, Kazuha and Hong Eun-chae. Originally a sextet, Kim Ga-ram was removed from the group on July 20, 2022, after the termination of her exclusive contract.Le Sserafim debuted on May 2, 2022, with the release of their first extended play (EP) Fearless.
                </p>
                <p>
                    The group's name, Le Sserafim, is an anagram of the phrase "I'm Fearless".
                </p>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4vbDFu0PUew" title="Le Sserafim" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {/* <p>
                    <small>I'm Fearless. 2022</small>
                </p> */}
                <p>
                    르세라핌은 쏘스뮤직과 HYBE가 결성한 대한민국의 걸그룹이다. 사쿠라, 김채원, 허윤진, 카즈하, 홍은채 등 5명의 멤버로 구성되어 있다. 원래 6인조였던 김가람은 전속계약 종료 후 2022년 7월 20일 그룹에서 제외되었습니다. 르세라핌은 2022년 5월 2일 첫 번째 확장 플레이(EP) Fearless를 발매하며 데뷔했습니다.
                </p>
                <p>
                    그룹명 Le Sserafim은 I'm Fearless'의 아나그램이다.
                </p>
            </section>
        </Layout >
    );
}

export default About