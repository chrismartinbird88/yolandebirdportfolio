import AnimationPoster1 from '../assets/projects/Animations/poster1.webp'
import AnimationPoster2 from '../assets/projects/Animations/poster2.webp'
import Animation1 from '../assets/projects/Animations/Like dislike right one (2).mp4'
import Animation2 from '../assets/projects/Animations/Reality check best (2).mp4'

import BusinessCard1 from '../assets/projects/Business cards/Image01.webp'
import BusinessCard2 from '../assets/projects/Business cards/Image02.webp'
import BusinessCard3 from '../assets/projects/Business cards/Image03.webp'

import DigitalArt1 from '../assets/projects/Digital art/Image01.webp'
import DigitalArt2 from '../assets/projects/Digital art/Image02.webp'
import DigitalArt3 from '../assets/projects/Digital art/Image03.webp'
import DigitalArt4 from '../assets/projects/Digital art/Image04.webp'
import DigitalArt5 from '../assets/projects/Digital art/Image05.webp'
import DigitalArt6 from '../assets/projects/Digital art/Image06.webp'
import DigitalArt7 from '../assets/projects/Digital art/Image07.webp'
import DigitalArt8 from '../assets/projects/Digital art/Image08.webp'
import DigitalArt9 from '../assets/projects/Digital art/Image09.webp'
import DigitalArt10 from '../assets/projects/Digital art/Image10.webp'
import DigitalArt11 from '../assets/projects/Digital art/Image11.webp'
import DigitalArt12 from '../assets/projects/Digital art/Image12.webp'
import DigitalArt13 from '../assets/projects/Digital art/Image13.webp'
import DigitalArt14 from '../assets/projects/Digital art/Image14.webp'

import Drawing1 from '../assets/projects/Drawings/Image01.webp'
import Drawing2 from '../assets/projects/Drawings/Image02.webp'
import Drawing3 from '../assets/projects/Drawings/Image03.webp'
import Drawing4 from '../assets/projects/Drawings/Image04.webp'
import Drawing5 from '../assets/projects/Drawings/Image05.webp'
import Drawing6 from '../assets/projects/Drawings/Image06.webp'
import Drawing7 from '../assets/projects/Drawings/Image07.webp'
import Drawing8 from '../assets/projects/Drawings/Image08.webp'
import Drawing9 from '../assets/projects/Drawings/Image09.webp'
import Drawing10 from '../assets/projects/Drawings/Image10.webp'
import Drawing11 from '../assets/projects/Drawings/Image11.webp'
import Drawing12 from '../assets/projects/Drawings/Image12.webp'
import Drawing13 from '../assets/projects/Drawings/Image13.webp'
import Drawing14 from '../assets/projects/Drawings/Image14.webp'
import Drawing15 from '../assets/projects/Drawings/Image15.webp'
import Drawing16 from '../assets/projects/Drawings/Image16.webp'
import Drawing17 from '../assets/projects/Drawings/Image17.webp'
import Drawing18 from '../assets/projects/Drawings/Image18.webp'
import Drawing19 from '../assets/projects/Drawings/Image19.webp'
import Drawing20 from '../assets/projects/Drawings/Image20.webp'
import Drawing21 from '../assets/projects/Drawings/Image21.webp'
import Drawing22 from '../assets/projects/Drawings/Image22.webp'
import Drawing23 from '../assets/projects/Drawings/Image23.webp'

import Flyer1 from '../assets/projects/Flyers/Image01.webp'
import Flyer2 from '../assets/projects/Flyers/Image02.webp'

import MixedMedia1 from '../assets/projects/Mixed mediums/Image01.webp'
import MixedMedia2 from '../assets/projects/Mixed mediums/Image02.webp'
import MixedMedia3 from '../assets/projects/Mixed mediums/Image03.webp'

import Painting1 from '../assets/projects/Paintings/Image01.webp'
import Painting2 from '../assets/projects/Paintings/Image02.webp'
import Painting3 from '../assets/projects/Paintings/Image03.webp'
import Painting4 from '../assets/projects/Paintings/Image04.webp'
import Painting5 from '../assets/projects/Paintings/Image05.webp'
import Painting6 from '../assets/projects/Paintings/Image06.webp'
import Painting7 from '../assets/projects/Paintings/Image07.webp'

import Photograph1 from '../assets/projects/Photographs/Image01.webp'
import Photograph2 from '../assets/projects/Photographs/Image02.webp'
import Photograph3 from '../assets/projects/Photographs/Image03.webp'
import Photograph4 from '../assets/projects/Photographs/Image04.webp'

import Planning from '../assets/projects/Planning/Image01.webp'

import PdfIcon from '../assets/projects/Scripts/pdf.webp'
import Script1 from '../assets/projects/Scripts/The ABC Killer Script.pdf'
import Script2 from '../assets/projects/Scripts/The Shoe Script.pdf'

import StoryboardPage1 from '../assets/projects/Storyboards/Image01.webp'
import StoryboardPage2 from '../assets/projects/Storyboards/Image02.webp'
import StoryboardPage3 from '../assets/projects/Storyboards/Image03.webp'
import StoryboardPage4 from '../assets/projects/Storyboards/Image04.webp'
import StoryboardPage5 from '../assets/projects/Storyboards/Image05.webp'
import StoryboardPage6 from '../assets/projects/Storyboards/Image06.webp'
import StoryboardPage7 from '../assets/projects/Storyboards/Image07.webp'

import VideoPoster from '../assets/projects/Videos/poster.webp'
import Video1 from '../assets/projects/Videos/THE ABC KILLER TRAILER.mp4'
import Video2 from '../assets/projects/Videos/Title sequence.mp4'
import '../index.css'

import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function Work() {

    // Business Card Modal constants
    const [open1, setOpen1] = useState(false);
    const onOpenModal1 = () => setOpen1(true);
    const onCloseModal1 = () => setOpen1(false);

    const [open64, setOpen64] = useState(false);
    const onOpenModal64 = () => setOpen64(true);
    const onCloseModal64 = () => setOpen64(false);
    
    //NEW ADDITION
    const [open2, setOpen2] = useState(false);
    const onOpenModal2 = () => setOpen2(true);
    const onCloseModal2 = () => setOpen2(false);

    // Digital Art Modal Constants
    const [open3, setOpen3] = useState(false);
    const onOpenModal3 = () => setOpen3(true);
    const onCloseModal3 = () => setOpen3(false);

    const [open4, setOpen4] = useState(false);
    const onOpenModal4 = () => setOpen4(true);
    const onCloseModal4 = () => setOpen4(false);



    const [open5, setOpen5] = useState(false);
    const onOpenModal5 = () => setOpen5(true);
    const onCloseModal5 = () => setOpen5(false);

    const [open6, setOpen6] = useState(false);
    const onOpenModal6 = () => setOpen6(true);
    const onCloseModal6 = () => setOpen6(false);

    const [open7, setOpen7] = useState(false);
    const onOpenModal7 = () => setOpen7(true);
    const onCloseModal7 = () => setOpen7(false);

    const [open8, setOpen8] = useState(false);
    const onOpenModal8 = () => setOpen8(true);
    const onCloseModal8 = () => setOpen8(false);

    const [open9, setOpen9] = useState(false);
    const onOpenModal9 = () => setOpen9(true);
    const onCloseModal9 = () => setOpen9(false);

    const [open10, setOpen10] = useState(false);
    const onOpenModal10 = () => setOpen10(true);
    const onCloseModal10 = () => setOpen10(false);

    const [open11, setOpen11] = useState(false);
    const onOpenModal11 = () => setOpen11(true);
    const onCloseModal11 = () => setOpen11(false);

    const [open12, setOpen12] = useState(false);
    const onOpenModal12 = () => setOpen12(true);
    const onCloseModal12 = () => setOpen12(false);

    const [open13, setOpen13] = useState(false);
    const onOpenModal13 = () => setOpen13(true);
    const onCloseModal13 = () => setOpen13(false);

    const [open14, setOpen14] = useState(false);
    const onOpenModal14 = () => setOpen14(true);
    const onCloseModal14 = () => setOpen14(false);

    const [open15, setOpen15] = useState(false);
    const onOpenModal15 = () => setOpen15(true);
    const onCloseModal15 = () => setOpen15(false);

    const [open16, setOpen16] = useState(false);
    const onOpenModal16 = () => setOpen16(true);
    const onCloseModal16 = () => setOpen16(false);

    // Drawing Modal Constants
    const [open17, setOpen17] = useState(false);
    const onOpenModal17 = () => setOpen17(true);
    const onCloseModal17 = () => setOpen17(false);

    const [open18, setOpen18] = useState(false);
    const onOpenModal18 = () => setOpen18(true);
    const onCloseModal18 = () => setOpen18(false);

    const [open19, setOpen19] = useState(false);
    const onOpenModal19 = () => setOpen19(true);
    const onCloseModal19 = () => setOpen19(false);

    const [open20, setOpen20] = useState(false);
    const onOpenModal20 = () => setOpen20(true);
    const onCloseModal20 = () => setOpen20(false);

    const [open21, setOpen21] = useState(false);
    const onOpenModal21 = () => setOpen21(true);
    const onCloseModal21 = () => setOpen21(false);

    const [open22, setOpen22] = useState(false);
    const onOpenModal22 = () => setOpen22(true);
    const onCloseModal22 = () => setOpen22(false);

    const [open23, setOpen23] = useState(false);
    const onOpenModal23 = () => setOpen23(true);
    const onCloseModal23 = () => setOpen23(false);

    const [open24, setOpen24] = useState(false);
    const onOpenModal24 = () => setOpen24(true);
    const onCloseModal24 = () => setOpen24(false);

    const [open25, setOpen25] = useState(false);
    const onOpenModal25 = () => setOpen25(true);
    const onCloseModal25 = () => setOpen25(false);

    const [open26, setOpen26] = useState(false);
    const onOpenModal26 = () => setOpen26(true);
    const onCloseModal26 = () => setOpen26(false);

    const [open27, setOpen27] = useState(false);
    const onOpenModal27 = () => setOpen27(true);
    const onCloseModal27 = () => setOpen27(false);

    const [open28, setOpen28] = useState(false);
    const onOpenModal28 = () => setOpen28(true);
    const onCloseModal28 = () => setOpen28(false);

    const [open29, setOpen29] = useState(false);
    const onOpenModal29 = () => setOpen29(true);
    const onCloseModal29 = () => setOpen29(false);

    const [open30, setOpen30] = useState(false);
    const onOpenModal30 = () => setOpen30(true);
    const onCloseModal30 = () => setOpen30(false);

    const [open31, setOpen31] = useState(false);
    const onOpenModal31 = () => setOpen31(true);
    const onCloseModal31 = () => setOpen31(false);

    const [open32, setOpen32] = useState(false);
    const onOpenModal32 = () => setOpen32(true);
    const onCloseModal32 = () => setOpen32(false);

    const [open33, setOpen33] = useState(false);
    const onOpenModal33 = () => setOpen33(true);
    const onCloseModal33 = () => setOpen33(false);

    const [open34, setOpen34] = useState(false);
    const onOpenModal34 = () => setOpen34(true);
    const onCloseModal34 = () => setOpen34(false);

    const [open35, setOpen35] = useState(false);
    const onOpenModal35 = () => setOpen35(true);
    const onCloseModal35 = () => setOpen35(false);

    const [open36, setOpen36] = useState(false);
    const onOpenModal36 = () => setOpen36(true);
    const onCloseModal36 = () => setOpen36(false);

    const [open37, setOpen37] = useState(false);
    const onOpenModal37 = () => setOpen37(true);
    const onCloseModal37 = () => setOpen37(false);

    const [open38, setOpen38] = useState(false);
    const onOpenModal38 = () => setOpen38(true);
    const onCloseModal38 = () => setOpen38(false);

    const [open39, setOpen39] = useState(false);
    const onOpenModal39 = () => setOpen39(true);
    const onCloseModal39 = () => setOpen39(false);

    // Flyer Modals Constants
    const [open40, setOpen40] = useState(false);
    const onOpenModal40 = () => setOpen40(true);
    const onCloseModal40 = () => setOpen40(false);

    const [open41, setOpen41] = useState(false);
    const onOpenModal41 = () => setOpen41(true);
    const onCloseModal41 = () => setOpen41(false);

    // Mixed Media Modals Constants
    const [open42, setOpen42] = useState(false);
    const onOpenModal42 = () => setOpen42(true);
    const onCloseModal42 = () => setOpen42(false);

    const [open43, setOpen43] = useState(false);
    const onOpenModal43 = () => setOpen43(true);
    const onCloseModal43 = () => setOpen43(false);

    const [open44, setOpen44] = useState(false);
    const onOpenModal44 = () => setOpen44(true);
    const onCloseModal44 = () => setOpen44(false);

    //Paintings Modals Constants  
    const [open45, setOpen45] = useState(false);
    const onOpenModal45 = () => setOpen45(true);
    const onCloseModal45 = () => setOpen45(false);

    const [open46, setOpen46] = useState(false);
    const onOpenModal46 = () => setOpen46(true);
    const onCloseModal46 = () => setOpen46(false);

    const [open47, setOpen47] = useState(false);
    const onOpenModal47 = () => setOpen47(true);
    const onCloseModal47 = () => setOpen47(false);

    const [open48, setOpen48] = useState(false);
    const onOpenModal48 = () => setOpen48(true);
    const onCloseModal48 = () => setOpen48(false);

    const [open49, setOpen49] = useState(false);
    const onOpenModal49 = () => setOpen49(true);
    const onCloseModal49 = () => setOpen49(false);

    const [open50, setOpen50] = useState(false);
    const onOpenModal50 = () => setOpen50(true);
    const onCloseModal50 = () => setOpen50(false);

    const [open51, setOpen51] = useState(false);
    const onOpenModal51 = () => setOpen51(true);
    const onCloseModal51 = () => setOpen51(false);

    // Photograph Modals Constants
    const [open52, setOpen52] = useState(false);
    const onOpenModal52 = () => setOpen52(true);
    const onCloseModal52 = () => setOpen52(false);

    const [open53, setOpen53] = useState(false);
    const onOpenModal53 = () => setOpen53(true);
    const onCloseModal53 = () => setOpen53(false);

    const [open54, setOpen54] = useState(false);
    const onOpenModal54 = () => setOpen54(true);
    const onCloseModal54 = () => setOpen54(false);

    const [open55, setOpen55] = useState(false);
    const onOpenModal55 = () => setOpen55(true);
    const onCloseModal55 = () => setOpen55(false);

    // Planning Modal Constant
    const [open56, setOpen56] = useState(false);
    const onOpenModal56 = () => setOpen56(true);
    const onCloseModal56 = () => setOpen56(false);

    // Storyboards Modals Constants
    const [open57, setOpen57] = useState(false);
    const onOpenModal57 = () => setOpen57(true);
    const onCloseModal57 = () => setOpen57(false);

    const [open58, setOpen58] = useState(false);
    const onOpenModal58 = () => setOpen58(true);
    const onCloseModal58 = () => setOpen58(false);

    const [open59, setOpen59] = useState(false);
    const onOpenModal59 = () => setOpen59(true);
    const onCloseModal59 = () => setOpen59(false);

    const [open60, setOpen60] = useState(false);
    const onOpenModal60 = () => setOpen60(true);
    const onCloseModal60 = () => setOpen60(false);

    const [open61, setOpen61] = useState(false);
    const onOpenModal61 = () => setOpen61(true);
    const onCloseModal61 = () => setOpen61(false);

    const [open62, setOpen62] = useState(false);
    const onOpenModal62 = () => setOpen62(true);
    const onCloseModal62 = () => setOpen62(false);

    const [open63, setOpen63] = useState(false);
    const onOpenModal63 = () => setOpen63(true);
    const onCloseModal63 = () => setOpen63(false);
    return (
        <div>
            <div className="flex items-center justify-center w-screen">
                <div className="bg-white">
                    <div className="container flex flex-col justify-center px-4 py-8 bg-black mx-auto md:p-8">
                        <h2 className="text-7xl font-bold inline border-b-4 border-pink-600 text-pink-500">
                            Work
                        </h2>
                        <p className="mt-4 mb-8 text-pink-500">
                            Click on each button below to view my work:
                        </p>
                        <div className="space-y-4">
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='storyboard-work' className="px-4 py-6 text-pink-500">
                                    Storyboards
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal57}>
                                            <img src={StoryboardPage1} className="icon" alt="StoryboardPage 1" /></ button>
                                        <Modal open={open57} onClose={onCloseModal57} center>
                                            <img src={StoryboardPage1} alt="StoryboardPage 1" />
                                        </Modal>

                                        <button onClick={onOpenModal58}>
                                            <img src={StoryboardPage2} className="icon" alt="StoryboardPage 2" /></ button>
                                        <Modal open={open58} onClose={onCloseModal58} center>
                                            <img src={StoryboardPage2} alt="StoryboardPage 2" />
                                        </Modal>

                                        <button onClick={onOpenModal59}>
                                            <img src={StoryboardPage3} className="icon" alt="StoryboardPage 3" /></ button>
                                        <Modal open={open59} onClose={onCloseModal59} center>
                                            <img src={StoryboardPage3} alt="StoryboardPage 3" />
                                        </Modal>

                                        <button onClick={onOpenModal60}>
                                            <img src={StoryboardPage4} className="icon" alt="StoryboardPage 4" /></ button>
                                        <Modal open={open60} onClose={onCloseModal60} center>
                                            <img src={StoryboardPage4} alt="StoryboardPage 4" />
                                        </Modal>

                                        <button onClick={onOpenModal61}>
                                            <img src={StoryboardPage5} className="icon" alt="StoryboardPage 5" /></ button>
                                        <Modal open={open61} onClose={onCloseModal61} center>
                                            <img src={StoryboardPage5} alt="StoryboardPage 5" />
                                        </Modal>

                                        <button onClick={onOpenModal62}>
                                            <img src={StoryboardPage6} className="icon" alt="StoryboardPage 6" /></ button>
                                        <Modal open={open62} onClose={onCloseModal62} center>
                                            <img src={StoryboardPage6} alt="StoryboardPage 6" />
                                        </Modal>

                                        <button onClick={onOpenModal63}>
                                            <img src={StoryboardPage7} className="icon" alt="StoryboardPage 7" /></ button>
                                        <Modal open={open63} onClose={onCloseModal63} center>
                                            <img src={StoryboardPage7} alt="StoryboardPage 7" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id="animation-work" className="px-4 py-6 text-pink-500">
                                    Animations
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4 align-items-center">
                                    <a href={Animation1} target="_blank" rel="noreferrer">
                                        <img className="icon" src={AnimationPoster1}
                                            alt="animation 1" />
                                    </a>

                                    <a href={Animation2} target="_blank" rel="noreferrer">
                                        <img className="icon" src={AnimationPoster2}
                                            alt="animation 2" />
                                    </a>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='business-cards-work' className="px-4 py-6 text-pink-500">
                                    Business Cards
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal1}><img src={BusinessCard1} className="icon" alt="business card 1" /></button>
                                        <Modal open={open1} onClose={onCloseModal1} center>
                                            <img src={BusinessCard1} alt="business card 1" />
                                        </Modal>

                                        <button onClick={onOpenModal2}><img src={BusinessCard2} className="icon" alt="business card 2" /></button>
                                        <Modal open={open2} onClose={onCloseModal2} center>
                                            <img src={BusinessCard2} alt="business card 2" />
                                        </Modal>
                                        
                                        {/* NEW ADDITION */}
                                        <button onClick={onOpenModal64}><img src={BusinessCard3} className="icon" alt="business card 3" /></button>
                                        <Modal open={open64} onClose={onCloseModal64} center>
                                            <img src={BusinessCard3} alt="business card 3" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='digital-art-work' className="px-4 py-6 text-pink-500">
                                    Digital Art
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal3}>
                                            <img src={DigitalArt1} className="icon" alt="digital art 1" /></ button>
                                        <Modal open={open3} onClose={onCloseModal3} center>
                                            <img src={DigitalArt1} alt="Digital Art 1" />
                                        </Modal>

                                        <button onClick={onOpenModal4}>
                                            <img src={DigitalArt2} className="icon" alt="digital art 2" /></ button>
                                        <Modal open={open4} onClose={onCloseModal4} center>
                                            <img src={DigitalArt2} alt="Digital Art 2" />
                                        </Modal>

                                        <button onClick={onOpenModal5}>
                                            <img src={DigitalArt3} className="icon" alt="digital art 3" /></ button>
                                        <Modal open={open5} onClose={onCloseModal5} center>
                                            <img src={DigitalArt3} alt="Digital Art 3" />
                                        </Modal>

                                        <button onClick={onOpenModal6}>
                                            <img src={DigitalArt4} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open6} onClose={onCloseModal6} center>
                                            <img src={DigitalArt4} alt="Digital Art 4" />
                                        </Modal>

                                        <button onClick={onOpenModal7}>
                                            <img src={DigitalArt5} className="icon" alt="business card 5" /></ button>
                                        <Modal open={open7} onClose={onCloseModal7} center>
                                            <img src={DigitalArt5} alt="Digital Art 5" />
                                        </Modal>

                                        <button onClick={onOpenModal8}>
                                            <img src={DigitalArt6} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open8} onClose={onCloseModal8} center>
                                            <img src={DigitalArt6} alt="Digital Art 6" />
                                        </Modal>

                                        <button onClick={onOpenModal9}>
                                            <img src={DigitalArt7} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open9} onClose={onCloseModal9} center>
                                            <img src={DigitalArt7} alt="Digital Art 7" />
                                        </Modal>

                                        <button onClick={onOpenModal10}>
                                            <img src={DigitalArt8} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open10} onClose={onCloseModal10} center>
                                            <img src={DigitalArt8} alt="Digital Art 8" />
                                        </Modal>

                                        <button onClick={onOpenModal11}>
                                            <img src={DigitalArt9} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open11} onClose={onCloseModal11} center>
                                            <img src={DigitalArt9} alt="Digital Art 9" />
                                        </Modal>

                                        <button onClick={onOpenModal12}>
                                            <img src={DigitalArt10} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open12} onClose={onCloseModal12} center>
                                            <img src={DigitalArt10} alt="Digital Art 10" />
                                        </Modal>

                                        <button onClick={onOpenModal13}>
                                            <img src={DigitalArt11} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open13} onClose={onCloseModal13} center>
                                            <img src={DigitalArt11} alt="Digital Art 11" />
                                        </Modal>

                                        <button onClick={onOpenModal14}>
                                            <img src={DigitalArt12} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open14} onClose={onCloseModal14} center>
                                            <img src={DigitalArt12} alt="Digital Art 12" />
                                        </Modal>

                                        <button onClick={onOpenModal15}>
                                            <img src={DigitalArt13} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open15} onClose={onCloseModal15} center>
                                            <img src={DigitalArt13} alt="Digital Art 13" />
                                        </Modal>

                                        <button onClick={onOpenModal16}>
                                            <img src={DigitalArt14} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open16} onClose={onCloseModal16} center>
                                            <img src={DigitalArt14} alt="Digital Art 14" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='drawings-work' className="px-4 py-6 text-pink-500">
                                    Drawings
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal17}>
                                            <img src={Drawing1} className="icon" alt="digital art 1" /></ button>
                                        <Modal open={open17} onClose={onCloseModal17} center>
                                            <img src={Drawing1} alt="Digital Art 1" />
                                        </Modal>

                                        <button onClick={onOpenModal18}>
                                            <img src={Drawing2} className="icon" alt="digital art 2" /></ button>
                                        <Modal open={open18} onClose={onCloseModal18} center>
                                            <img src={Drawing2} alt="Digital Art 2" />
                                        </Modal>

                                        <button onClick={onOpenModal19}>
                                            <img src={Drawing3} className="icon" alt="digital art 3" /></ button>
                                        <Modal open={open19} onClose={onCloseModal19} center>
                                            <img src={Drawing3} alt="Digital Art 3" />
                                        </Modal>

                                        <button onClick={onOpenModal20}>
                                            <img src={Drawing4} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open20} onClose={onCloseModal20} center>
                                            <img src={Drawing4} alt="Digital Art 4" />
                                        </Modal>

                                        <button onClick={onOpenModal21}>
                                            <img src={Drawing5} className="icon" alt="business card 5" /></ button>
                                        <Modal open={open21} onClose={onCloseModal21} center>
                                            <img src={Drawing5} alt="Digital Art 5" />
                                        </Modal>

                                        <button onClick={onOpenModal22}>
                                            <img src={Drawing6} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open22} onClose={onCloseModal22} center>
                                            <img src={Drawing6} alt="Digital Art 6" />
                                        </Modal>

                                        <button onClick={onOpenModal23}>
                                            <img src={Drawing7} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open23} onClose={onCloseModal23} center>
                                            <img src={Drawing7} alt="Digital Art 7" />
                                        </Modal>

                                        <button onClick={onOpenModal24}>
                                            <img src={Drawing8} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open24} onClose={onCloseModal24} center>
                                            <img src={Drawing8} alt="Digital Art 8" />
                                        </Modal>

                                        <button onClick={onOpenModal25}>
                                            <img src={Drawing9} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open25} onClose={onCloseModal25} center>
                                            <img src={Drawing9} alt="Digital Art 9" />
                                        </Modal>

                                        <button onClick={onOpenModal26}>
                                            <img src={Drawing10} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open26} onClose={onCloseModal26} center>
                                            <img src={Drawing10} alt="Digital Art 10" />
                                        </Modal>

                                        <button onClick={onOpenModal27}>
                                            <img src={Drawing11} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open27} onClose={onCloseModal27} center>
                                            <img src={Drawing11} alt="Digital Art 11" />
                                        </Modal>

                                        <button onClick={onOpenModal28}>
                                            <img src={Drawing12} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open28} onClose={onCloseModal28} center>
                                            <img src={Drawing12} alt="Digital Art 12" />
                                        </Modal>

                                        <button onClick={onOpenModal29}>
                                            <img src={Drawing13} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open29} onClose={onCloseModal29} center>
                                            <img src={Drawing13} alt="Digital Art 13" />
                                        </Modal>

                                        <button onClick={onOpenModal30}>
                                            <img src={Drawing14} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open30} onClose={onCloseModal30} center>
                                            <img src={Drawing14} alt="Digital Art 14" />
                                        </Modal>

                                        <button onClick={onOpenModal31}>
                                            <img src={Drawing15} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open31} onClose={onCloseModal31} center>
                                            <img src={Drawing15} alt="Digital Art 15" />
                                        </Modal>

                                        <button onClick={onOpenModal32}>
                                            <img src={Drawing16} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open32} onClose={onCloseModal32} center>
                                            <img src={Drawing16} alt="Digital Art 16" />
                                        </Modal>

                                        <button onClick={onOpenModal33}>
                                            <img src={Drawing17} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open33} onClose={onCloseModal33} center>
                                            <img src={Drawing17} alt="Digital Art 17" />
                                        </Modal>

                                        <button onClick={onOpenModal34}>
                                            <img src={Drawing18} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open34} onClose={onCloseModal34} center>
                                            <img src={Drawing18} alt="Digital Art 18" />
                                        </Modal>

                                        <button onClick={onOpenModal35}>
                                            <img src={Drawing19} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open35} onClose={onCloseModal35} center>
                                            <img src={Drawing19} alt="Digital Art 19" />
                                        </Modal>

                                        <button onClick={onOpenModal36}>
                                            <img src={Drawing20} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open36} onClose={onCloseModal36} center>
                                            <img src={Drawing20} alt="Digital Art 20" />
                                        </Modal>

                                        <button onClick={onOpenModal37}>
                                            <img src={Drawing21} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open37} onClose={onCloseModal37} center>
                                            <img src={Drawing21} alt="Digital Art 21" />
                                        </Modal>

                                        <button onClick={onOpenModal38}>
                                            <img src={Drawing22} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open38} onClose={onCloseModal38} center>
                                            <img src={Drawing22} alt="Digital Art 22" />
                                        </Modal>

                                        <button onClick={onOpenModal39}>
                                            <img src={Drawing23} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open39} onClose={onCloseModal39} center>
                                            <img src={Drawing23} alt="Digital Art 23" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='flyers-work' className="px-4 py-6 text-pink-500">
                                    Flyers
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal40}>
                                            <img src={Flyer1} className="icon" alt="Flyer 1" /></ button>
                                        <Modal open={open40} onClose={onCloseModal40} center>
                                            <img src={Flyer1} alt="Flyer 1" />
                                        </Modal>

                                        <button onClick={onOpenModal41}>
                                            <img src={Flyer2} className="icon" alt="Flyer 2" /></ button>
                                        <Modal open={open41} onClose={onCloseModal41} center>
                                            <img src={Flyer2} alt="Flyer 2" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='mixed-media-art-work' className="px-4 py-6 text-pink-500">
                                    Mixed Media Art
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal42}>
                                            <img src={MixedMedia1} className="icon" alt="MixedMedia 1" /></ button>
                                        <Modal open={open42} onClose={onCloseModal42} center>
                                            <img src={MixedMedia1} alt="MixedMedia 1" />
                                        </Modal>

                                        <button onClick={onOpenModal43}>
                                            <img src={MixedMedia2} className="icon" alt="MixedMedia 2" /></ button>
                                        <Modal open={open43} onClose={onCloseModal43} center>
                                            <img src={MixedMedia2} alt="MixedMedia 2" />
                                        </Modal>

                                        <button onClick={onOpenModal44}>
                                            <img src={MixedMedia3} className="icon" alt="MixedMedia 3" /></ button>
                                        <Modal open={open44} onClose={onCloseModal44} center>
                                            <img src={MixedMedia3} alt="MixedMedia 3" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='paintings-work' className="px-4 py-6 text-pink-500">
                                    Paintings
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal45}>
                                            <img src={Painting1} className="icon" alt="digital art 1" /></ button>
                                        <Modal open={open45} onClose={onCloseModal45} center>
                                            <img src={Painting1} alt="Digital Art 1" />
                                        </Modal>

                                        <button onClick={onOpenModal46}>
                                            <img src={Painting2} className="icon" alt="digital art 2" /></ button>
                                        <Modal open={open46} onClose={onCloseModal46} center>
                                            <img src={Painting2} alt="Digital Art 2" />
                                        </Modal>

                                        <button onClick={onOpenModal47}>
                                            <img src={Painting3} className="icon" alt="digital art 3" /></ button>
                                        <Modal open={open47} onClose={onCloseModal47} center>
                                            <img src={Painting3} alt="Digital Art 3" />
                                        </Modal>

                                        <button onClick={onOpenModal48}>
                                            <img src={Painting4} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open48} onClose={onCloseModal48} center>
                                            <img src={Painting4} alt="Digital Art 4" />
                                        </Modal>

                                        <button onClick={onOpenModal49}>
                                            <img src={Painting5} className="icon" alt="business card 5" /></ button>
                                        <Modal open={open49} onClose={onCloseModal49} center>
                                            <img src={Painting5} alt="Digital Art 5" />
                                        </Modal>

                                        <button onClick={onOpenModal50}>
                                            <img src={Painting6} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open50} onClose={onCloseModal50} center>
                                            <img src={Painting6} alt="Digital Art 6" />
                                        </Modal>

                                        <button onClick={onOpenModal51}>
                                            <img src={Painting7} className="icon" alt="business card 1" /></ button>
                                        <Modal open={open51} onClose={onCloseModal51} center>
                                            <img src={Painting7} alt="Digital Art 7" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='photograph-work' className="px-4 py-6 text-pink-500">
                                    Photographs
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal52}>
                                            <img src={Photograph1} className="icon" alt="Photograph 1" /></ button>
                                        <Modal open={open52} onClose={onCloseModal52} center>
                                            <img src={Photograph1} alt="Photograph 1" />
                                        </Modal>

                                        <button onClick={onOpenModal53}>
                                            <img src={Photograph2} className="icon" alt="Photograph 2" /></ button>
                                        <Modal open={open53} onClose={onCloseModal53} center>
                                            <img src={Photograph2} alt="Photograph 2" />
                                        </Modal>

                                        <button onClick={onOpenModal54}>
                                            <img src={Photograph3} className="icon" alt="Photograph 3" /></ button>
                                        <Modal open={open54} onClose={onCloseModal54} center>
                                            <img src={Photograph3} alt="Photograph 3" />
                                        </Modal>

                                        <button onClick={onOpenModal55}>
                                            <img src={Photograph4} className="icon" alt="Photograph 1" /></ button>
                                        <Modal open={open55} onClose={onCloseModal55} center>
                                            <img src={Photograph4} alt="Photograph 4" />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='planning-work' className="px-4 py-6 text-pink-500">
                                    Planning
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <div>
                                        <button onClick={onOpenModal56}>
                                            <img src={Planning} className="icon" alt="Planning " /></ button>
                                        <Modal open={open56} onClose={onCloseModal56} center>
                                            <img src={Planning} alt="Planning " />
                                        </Modal>
                                    </div>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='scripts-work' className="px-4 py-6 text-pink-500">
                                    Scripts
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4   align-items-center">
                                    <a href={Script1} target="_blank" rel="noreferrer">
                                        <img src={PdfIcon}
                                            className="icon" alt="Script1" />
                                    </a>
                                    <a href={Script2} target="_blank" rel="noreferrer">
                                        <img src={PdfIcon}
                                            className="icon" alt="Script2" />
                                    </a>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                            <details className="w-full rounded-lg ring-1 ring-purple-600">
                                <summary id='videos-work' className="px-4 py-6 text-pink-500">
                                    Videos
                                </summary>
                                <div className="px-4 py-6 pt-0 ml-4 mt-4 display-inline width-150px height-150px">
                                    <a href={Video1} target="_blank" rel="noreferrer">
                                        <img src={VideoPoster}
                                            className="icon" alt="Video1" />
                                    </a>
                                    <a href={Video2} target="_blank" rel="noreferrer">
                                        <img src={VideoPoster}
                                            className="icon" alt="Video2" />
                                    </a>
                                </div>
                                <div className='px-4 py-6 pt-0 ml-4 mt-4 align-items-center'>
                                    <a className="text-pink-500" href='/Skills'>Back to Skills Page</a>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='work-footer'>
                <p className='text-align-center d-block'>Copyright &copy; 2023</p>
            </footer>
        </div>
    );
}