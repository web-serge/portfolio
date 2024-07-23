import s from './about.module.scss'
import {Button} from "@/component/button/Button";
import idea from './lotie-idea.json'
import {useLottie} from "lottie-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload} from "@fortawesome/free-solid-svg-icons/faDownload";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons/faPhoneVolume";

export const About = () => {
    const options = {
        animationData: idea,
        loop: true,
        autoplay: true,
    };
    const {View} = useLottie(options);

    return (
        <section className={s.about} id='about'>
            <div className={`${s.about_container} wrapper`}>
                <div className={s.about_image}>
                    {View}
                </div>
                <div className={s.about_main}>
                    <h3 style={{maxWidth: '100px', textAlign: 'center'}}>About Me</h3>
                    <h2>Want to know me?</h2>
                    <p>
                        I&#39;m a Frontend Developer passionate about crafting interactive, accessible, and responsive
                        websites. Check out my projects section for some of the beautiful websites I&#39;ve built.
                    </p>
                    <p>
                        I&#39;m currently open to Job opportunities where I can contribute to your business and create
                        delightful user experiences. Feel free to contact me if you find my skills useful.
                    </p>
                    <div style={{display: 'flex', gap: '2rem', margin: '2rem 0'}}>
                        <div className={s.about__signature}>
                            <span className='bold'>Sergey Churekov</span>
                            <span className='bold'>Frontend Developer</span>
                        </div>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="10rem" height="5rem"
                             viewBox="0 0 568 256" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)">
                                <path className="st0" d="M1016 2542 c-11 -18 174 -316 273 -438 l49 -62 -91 -16 c-440 -80
 -802 -247 -1033 -480 -84 -85 -108 -116 -146 -192 -85 -169 -87 -310 -9 -469
 72 -146 198 -271 389 -386 131 -80 401 -198 561 -245 19 -6 -14 -42 -52 -59
 l-29 -12 27 -22 c48 -37 126 -21 155 33 8 16 19 24 29 21 9 -2 81 -20 161 -39
 1084 -263 2672 -225 3766 89 358 103 604 224 604 297 0 13 -5 29 -12 36 -8 8
 -8 15 2 26 7 9 10 23 6 31 -4 12 -13 10 -48 -15 -24 -16 -58 -33 -77 -36 -32
 -7 -34 -6 -27 17 19 64 18 94 -3 107 -18 11 -22 10 -28 -5 -42 -117 -118 -251
 -127 -223 -2 8 -7 51 -11 95 -4 64 -10 83 -26 98 -29 23 -38 22 -50 -11 -11
 -32 -70 -75 -95 -70 -10 2 -21 17 -26 35 -11 44 -51 73 -100 73 -32 0 -47 -7
 -73 -33 -21 -21 -38 -30 -43 -25 -6 6 -27 -13 -55 -50 -54 -69 -106 -117 -153
 -139 -69 -33 -77 25 -15 113 16 23 32 51 35 62 9 28 -10 62 -33 62 -20 0 -84
 -65 -126 -129 -36 -54 -49 -52 -43 7 4 33 23 79 66 156 112 200 158 346 169
 536 7 112 -7 190 -43 241 -27 39 -65 62 -88 53 -24 -9 -66 -79 -92 -152 -42
 -121 -94 -502 -94 -687 0 -71 -1 -75 -46 -134 -56 -74 -107 -118 -156 -133
 -77 -23 -93 17 -21 53 49 25 93 77 93 111 0 11 -15 35 -34 54 -45 45 -84 46
 -120 3 -14 -17 -30 -27 -36 -24 -6 4 -24 -5 -41 -19 -25 -21 -84 -46 -112 -46
 -4 0 -7 54 -5 120 3 102 1 122 -14 136 -16 17 -19 17 -39 -2 -25 -22 -54 -78
 -80 -149 -17 -48 -18 -48 -18 -17 -1 35 -43 88 -61 77 -6 -3 -10 -24 -10 -47
 0 -46 -18 -76 -100 -162 -52 -55 -106 -93 -117 -83 -3 3 -7 34 -10 69 -5 60
 -23 98 -47 98 -6 0 -19 -21 -29 -47 -9 -27 -26 -59 -38 -73 l-20 -25 4 109 c3
 97 2 111 -15 128 -26 26 -41 19 -56 -27 -23 -71 -155 -222 -185 -212 -8 2 -14
 37 -18 93 -3 49 -9 97 -14 107 -9 21 -62 50 -76 42 -5 -4 -24 -32 -42 -63
 l-32 -57 -3 38 c-3 30 6 54 41 115 136 236 176 355 184 540 6 129 -4 179 -45
 228 -53 63 -94 49 -141 -48 -73 -149 -121 -489 -121 -849 l0 -187 31 -26 c46
 -39 56 -34 61 28 4 49 67 206 83 206 4 0 3 -47 -1 -104 l-7 -104 38 -11 c63
 -17 133 23 207 119 l27 35 1 -49 c0 -43 4 -53 36 -82 44 -42 77 -44 101 -6 9
 15 18 29 20 31 1 2 12 -8 24 -22 42 -54 142 -17 210 78 l34 48 3 -49 c4 -76
 10 -92 42 -109 39 -20 40 -20 40 23 0 39 29 161 54 227 l15 40 0 -51 c1 -47 5
 -55 37 -84 32 -28 41 -31 78 -25 22 4 59 19 81 34 l40 27 0 -64 c0 -59 2 -66
 32 -92 81 -72 184 -35 275 100 17 25 17 24 17 -43 1 -62 4 -71 30 -98 41 -40
 56 -37 71 16 7 25 17 48 22 51 4 3 25 -8 46 -25 21 -16 50 -33 64 -36 55 -14
 146 50 213 150 25 37 26 38 19 10 -18 -68 4 -118 68 -151 59 -31 113 -6 141
 65 13 31 28 45 72 69 60 33 59 33 70 -31 7 -45 57 -103 97 -113 24 -5 31 0 70
 59 41 62 46 66 88 70 25 3 60 9 78 12 25 6 32 4 32 -8 0 -46 -177 -139 -421
 -221 -924 -311 -2385 -402 -3509 -220 -160 25 -441 84 -520 108 -45 13 -45 13
 -51 67 -3 30 -14 70 -24 89 -10 19 -95 112 -189 205 -178 177 -225 239 -276
 370 -34 87 -35 261 -2 355 52 147 172 301 279 358 146 77 313 59 365 -41 30
 -58 31 -156 2 -215 -20 -40 -21 -43 -4 -52 13 -7 23 -3 42 18 38 40 48 66 48
 119 -1 97 -63 178 -179 236 -61 30 -73 32 -166 32 -97 0 -102 -1 -172 -39
 -225 -119 -363 -416 -308 -660 34 -157 121 -283 336 -489 129 -124 149 -148
 160 -187 14 -54 5 -120 -17 -120 -33 0 -278 96 -409 160 -190 93 -283 156
 -396 269 -76 76 -104 113 -136 178 -70 140 -77 266 -22 404 95 242 408 475
 821 613 121 41 400 106 453 106 12 0 42 -22 70 -51 126 -130 290 -235 384
 -246 93 -11 120 38 56 101 l-34 35 32 6 c134 26 177 47 177 89 0 80 -186 123
 -487 113 l-173 -6 -53 67 c-70 86 -160 222 -227 340 -50 88 -63 102 -74 84z
 m871 -537 c80 -18 120 -43 110 -67 -15 -40 -183 -63 -314 -43 -34 5 -53 4 -53
 -3 0 -17 24 -29 75 -37 54 -7 97 -29 134 -69 45 -48 -9 -62 -101 -25 -73 29
 -169 95 -262 181 l-80 73 55 6 c98 12 359 3 436 -16z m1247 -497 c35 -85 27
 -261 -19 -406 -27 -84 -104 -259 -131 -296 -15 -19 -16 -13 -10 89 9 151 34
 344 57 434 17 67 76 211 86 211 2 0 10 -15 17 -32z m1588 -14 c37 -84 25 -278
 -28 -460 -24 -83 -102 -264 -135 -315 -15 -21 -15 -19 -12 42 13 252 45 516
 74 609 13 42 70 170 76 170 2 0 13 -21 25 -46z m378 -849 c0 -19 -4 -35 -10
 -35 -11 0 -14 53 -3 63 11 12 13 8 13 -28z m-830 -4 c0 -32 -43 -91 -65 -91
 -19 0 2 59 32 94 29 33 33 33 33 -3z m788 -31 c30 -40 28 -56 -12 -96 -45 -45
 -66 -45 -66 1 0 35 36 125 49 125 4 0 17 -13 29 -30z"></path>
                                <path className="st0" d="M2547 1746 c-86 -36 -161 -98 -228 -189 -32 -44 -59 -84 -59 -87 0
 -22 -64 -30 -228 -30 -247 0 -373 -21 -496 -80 -129 -61 -228 -171 -258 -283
 -11 -41 -10 -49 2 -57 11 -7 21 4 41 48 68 147 209 252 399 297 83 20 465 34
 480 19 4 -5 -10 -56 -32 -114 -125 -329 -156 -744 -69 -943 28 -65 99 -138
 166 -171 200 -98 406 70 393 319 -3 63 -8 80 -35 117 -37 52 -119 98 -174 98
 -26 0 -46 -8 -66 -25 l-28 -25 24 -20 24 -21 23 22 c27 25 102 31 128 10 46
 -39 45 -164 -2 -263 -54 -115 -138 -177 -240 -178 -67 0 -85 10 -116 63 -111
 189 -69 690 85 1035 39 87 52 100 108 107 300 41 431 110 431 228 0 41 -33 93
 -79 124 -45 31 -117 30 -194 -1z m193 -57 c0 -35 -30 -86 -75 -128 -32 -29
 -64 -46 -124 -65 -89 -28 -161 -42 -161 -32 0 18 88 120 135 156 60 46 155 89
 198 90 21 0 27 -5 27 -21z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className={s.about__buttonBox}>
                        <Button variant='secondary' as={'a'} href='https://t.me/web_serge' target='_blank'>
                            <span>Hire me</span>
                            <span>Hire me <FontAwesomeIcon icon={faPhoneVolume}/></span>
                        </Button>
                        <Button as={'a'}>
                            <span>Download CV</span>
                            <span>Download <FontAwesomeIcon icon={faDownload}/></span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};