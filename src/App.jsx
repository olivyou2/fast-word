import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components"

const WpmDisplayWrapper = styled.div`
  position: fixed;

  width: 100vw;
  bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #${(props) => !props.$blackTheme ? '181818' : 'fff'};
  
  // not to drag
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  transition: background-color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
`;

const WordWrapper = styled.div`
  position: fixed;

  width: 100vw;
  height: 100vh;
  
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const Word = styled.div`
  /* font-size: ${(props) => props.$first ? 4 : 3}em; */
  /* transition: font-size ${(props) => props.$first ? 1000 : 1000}ms ease-out; */
  
  font-size: 3em;
  color: #${(props) => !props.$blackTheme ? '181818' : 'fff'};

  transition: background-color 150ms ease-in-out;
  transition: color 150ms ease-in-out;

  // not to drag
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

const Background = styled.div`
  background-color: #${(props) => props.$blackTheme ? '181818' : 'fff'} ;
  transition: background-color 150ms ease-in-out;

  width: 100vw;
  height: 100vh;
`;

const ThemeChangeBtn = styled.div`
  width: 120px;
  padding: 5px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: #${(props) => !props.$blackTheme ? '181818' : 'fff'};;
  color: #${(props) => props.$blackTheme ? '181818' : 'fff'};;
  font-weight: 700;

  text-align: center;
  
  // not to drag
  user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  transition: background-color 150ms ease-in-out;
  transition: color 150ms ease-in-out;
`;

const BackWrapper = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [wpm, setWpm] = useState(400);

  const [ctrlPressed, setCtrlPressed] = useState(false);
  const [spacePressed, setSpacePressed] = useState(false);

  const [blackTheme, setBlackTheme] = useState(true);

  const [words, setWords] = useState([]);
  const [wordIndex, setWordIndex] = useState(0);
  const [animation, setAnimation] = useState(true);

  const navigate = useNavigate();

  // Initial Setting
  useEffect(() => {
    const content = `등장 인물
    에밀 싱클레어: 주인공. 감수성이 남달리 예민한 그는 어린 소년으로부터 청년기를 거쳐 성인이 되어 가는 과정에서 많은 갈등을 겪는다.
    막스 데미안: 싱클레어의 친구. 싱클레어가 성장해 가면서 여러 가지 갈등과 어려움에 부닥칠 때마다 나아갈 길을 제시해 준다. 싱클레어는 그를 통하여 어른으로 다가가는 과정에서 큰 힘을 얻는다.
    에바 부인: 막스 데미안의 어머니로 매우 아름답고 매력적인 여인. 그녀는 많은 젊은이들로부터 구원의 여인상으로 추앙을 받는다. 싱클레어 역시 그녀의 신비스러운 매력에 빠져들었으나, 끝까지 그의 앞날을 이끌어주는 친구의 어머니로 남는다.
    프란츠 크로머: 양복점 집 아들로 읍내의 불량배이다. 싱클레어가 아직 어리던 시절 그를 악의 구덩이로 끌어들여 심하게 괴롭힌다. 막스 데미안에 의해 어느 날 갑자기 싱클레어의 곁에서 사라진다.
    피스토리우스: 음악가로 교회에서 오르간을 연주한다. 어느 날 갑자기 싱클레어의 곁에 등장하면서 그에게 많은 영향을 끼친다. 본래는 신학 대학에서 신학을 공부하고 있었으나, 어떤 신비스러운 종교적 사념에 몰두하여 신학 공부를 집어치우게 된다.
    크나우어: 싱클레어가 다니던 김나지움의 동급생이다. 그가 자살하려던 장소에 싱클레어가 나타남으로 인하여 그는 싱클레어의 열렬한 숭배자가 된다. 싱클레어가 막스 데미안으로부터 많은 도움을 받았듯이 그 역시 싱클레어로부터 정신적인 도움을 많이 받게 된다
    줄거리
    싱클레어는 부모의 따뜻한 보살핌과 기독교 신앙의 가르침 안에서 자라는 평범한 소년이었다. 그는 부모가 품어주는 밝은 세계가 주는 편안함 속에서 안락을 누렸지만, 동시에 부모의 세계 밖에 있는 어둠의 세계에도 두려움과 함께 호기심을 갖고 접촉하고 있었다. 그곳은 때로는 욕설과 싸움이 있었지만, 때로는 솔직한 감정의 교류가 그를 유혹하고 있었다. 싱클레어는 자신의 환경으로부터 밝음과 어둠의 두 세계를 발견하고 모두 마음에 품으면서, 어느 곳에도 온전히 속하지 못한 채 갈등하게 된다. 이것이 싱클레어의 내적 갈등의 시작이다.
    
    싱클레어는 이웃의 가난한 동갑내기 친구들과 어울려 지내던 중에, 프란츠 크로머라는 불량 소년으로 인해 어둠의 세계에 깊이 발을 내딛게 된다. 그는 크로머에게 뜻하지 않은 거짓말을 트집 잡히게 되고, 이로 인해 부모의 돈을 훔쳐 크로머에게 바치는 일을 계속하게 된다. 탕자처럼 부모의 뜻을 거역하고 죄를 저질렀다는 죄책감과 양심의 가책으로 인해 싱클레어는 극도로 두려워하면서도, 부모에게 고백하지 못한 채 떳떳하지 못한 일을 계속하게 된다. 그는 선악의 이분법적 세계에 갇혀 이러지도 저러지도 못하는 고통스러운 유년기를 보내게 된 것이다.
    
    그러던 중에 싱클레어는 학교로 새로 전학 온 데미안을 만나게 된다. 데미안은 싱클레어가 갖고 있는 내면의 갈등과 외부의 고통을 발견하고, 선악의 이분법적 세계로부터 벗어나 독립할 수 있게끔 그를 돕는다. 싱클레어는 데미안을 통해 흔히 알고 있고 한번도 의심해본 적이 없는 성서의 두 이야기 - 카인과 아벨, 예수와 십자가 위의 두 도둑 - 를 전혀 다르게 바라볼 수 있음을 깨닫는다. 즉, 카인은 극악무도한 살인자가 아니라, 강인한 내적인 힘을 갖고 신으로부터 독립하였기에 약한 자들로부터 질시를 받은 종족을 상징한다고 볼 수 있고, 또한 십자가 위의 두 도둑 중에 끝까지 자신의 신념과 가치를 지킨 채 죽음을 떳떳이 맞이한 한 도둑이 예수 앞에 무너진 다른 도둑보다 내면의 진실에 보다 더 충실하였다고 볼 수 있다. 이렇듯 싱클레어는 데미안을 통한 새로운 해석과 그와의 교류를 통해, 어릴 적 선악의 이분법적 세계의 구분과 가르침이 절대적인 것이 아님을 알게 되고 부모의 밝은 세계로부터 독립한다. 하지만 그 대신 자신의 가치를 스스로 찾아 나서야 하는 책임의식과 무게감을 안은 채 고등학교에 진학하게 된다. 그리고 자아를 찾기 위한 싱클레어의 여행이 시작된다.
    
    싱클레어는 고독과 냉소 가운데 불량한 패거리들과 어울려 술과 향락, 성욕에 취해 지낸다. 그는 금지된 악의 세계를 맘껏 경험하지만, 그 속에서 몸과 마음이 망가지는 자신을 보며 한편으로는 쾌감을, 다른 한편으로는 참담한 좌절을 맛보아야 했다. 어린 시절에 밝음의 세계에 갇혀있는 대신에 이제는 어둠의 세계에 사로잡힌 자신을 발견한 것이다. 싱클레어는 이 시기에 베아트리체라는 - 그가 그렇게 이름 붙인 - 새로운 이성을 발견하고, 그녀를 자신의 새로운 이상으로 삼아 자신의 내면의 세계를 다시 세우려 노력한다. 즉, 그는 자신의 의지로 선한 세계를 세우고자, 그는 절제와 순결, 정결함과 품위를 지키며 생활하고자 한다. 그러던 중에 데미안을 떠올리고 그에 대한 그리움으로, 자신이 그린 '알을 뚫고 날아오르는 매'의 그림을 데미안에게 보낸다.
    
    데미안으로부터 온 답장에는 다음과 같은 글이 써 있었다. "새는 알을 뚫고 나오기 위해 싸운다. 알은 세계다. 태어나려는 자는 하나의 세계를 깨뜨려야 한다. 알을 뚫고 나온 새는 신에게로 날아간다. 신의 이름은 아프락사스다." 그 후 싱클레어는 아프락사스의 의미를 찾아 방황한다. 그는 아직 선과 악을 초월하여 자유로운 내적 자아를 확립하지 못한 채 금욕과 절제를 통해 선한 세계를 세우고자 노력하고 있었기 때문에, 베아트리체의 영상을 통해 일시적으로 잠재웠던 성적 욕구로 인해 괴로워하고 있었다.
    
    이 때 싱클레어는 오르간 신부 피스토리우스를 만나 그로부터 아프락사스의 의미를 배우게 된다. 그는 신이기도 하면서 동시에 악마이기도 한 아프락사스를 알아가면서, 선과 악의 내면의 갈등을 통합해나가는 내적 자아의 힘을 발견하게 된다. 그는 피스토리우스와의 만남을 통해 자신의 내적 자아의 진보를 경험하고, 점차 자신의 꿈, 생각, 감정에 대해 신뢰를 가지게 된다. 그는 이제 자신의 성적 욕구를 더욱 성숙하게 다룰 수 있게 되었다. 어느 날 그는 어머니이자 연인이면서 동시에 창녀이자 매춘부인, 낯선 여성의 영상을 꿈 속에서 대면하게 된다. 싱클레어는 마치 야곱의 씨름처럼 자신의 꿈에 나타난 영상과 씨름하면서, 선악의 모든 대립되는 세계가 자신 안에서 통합되는 일체감, 즉 아프락사스를 체험하게 된다. 이제 비로소 어릴 적 <두 세계>의 억눌림과 죄의식으로부터 완전히 갈라서고 자유로워진 것이다.
    
    하지만 싱클레어와 스승인 피스토리우스와의 관계는 곧 파국을 맞게 된다. 싱클레어는 피스토리우스가 내뱉는 아프락사스의 가르침에 대해 의문을 갖는다. 아프락사스는 선과 악을 통합하는 내적인 건강한 분별력으로 새로운 것을 창조해내는 힘인데, 이러한 가르침과 달리 피스토리우스는 과거의 종교 의식에 집착하는 모습을 보였기 때문이다. 이에 대한 싱클레어의 신랄한 비판으로 인해 두 사람의 관계는 깨지고 만다. 하지만 그는 이 경험을 통해, 아프락사스의 진정한 성취는 자기 자신에게로 가 자신의 운명을 찾아 그 운명을 자신 속에서 온전히 살아내는 것, 그리고 스스로 새로운 것을 만들어내고자 실천하는 것, 이를 위해 감당해야 할 고독의 깊이가 절대적이라는 것을 깨닫게 된다. 이러한 깨달음 속에서 그는 대학에 진학한다.
    
    싱클레어는 기성품과 같은 수업을 제공하는 대학 교육과 패거리에 휩쓸리는 대학 문화에 염증을 느끼고, 자신만의 공간에서 니체를 사유하며 고독하지만 자유로운 생활을 만끽한다. 그러던 중에 그는 우연히 데미안과 조우하게 되면서 두 가지 환경에 놓이게 된다. 즉, 당시의 시대적 환경인 전체주의와 전쟁과 대면하게 되고, 동시에 데미안의 어머니인 에바 부인을 만나 사랑에 빠지게 된다. 데미안은 제국주의와 전체주의의 망령이 지배하여 1차 세계 대전이 발발하기 직전인 당시의 시대상황에 대해 깊은 관심을 갖고, 이에 대한 고민을 나누는 공동체 모임을 갖고 있었다. 싱클레어는 이 모임에 참여하였고, 이 모임을 통해 사랑과 우정을 나누고 세계에 대한 진지한 대화를 나누었다. 즉, 그는 자유롭고 독립된 개인들의 연대 공동체인 데미안과 에바 부인의 이 모임을 사랑했고, 그 안에서 커다란 충족감을 누렸다.
    
    그와 함께 싱클레어는 에바 부인에게서 이성애를 느낀다. 에바 부인은 그가 꿈 속 영상을 통해 그토록 강렬하게 내면에서 그리워했던 아프락사스의 얼굴이었기 때문이다. 그녀는 그에게 있어서 한편으로는 자신을 내면의 성숙으로 이끄는 한 상징의 모습으로, 다른 한편으로는 관능적 욕구를 불태우게 만드는 현실 속 여인의 모습으로 다가왔다. 그는 때때로 위태롭기도 했지만 에바 부인과의 관계에서 죄책감에 빠지지 않고 아프락사스의 성숙함을 잃지 않는다.
    
    에바 부인, 데미안, 싱클레어 모두가 전쟁의 예감을 각자의 방식으로 체험한 가운데, 드디어 전쟁이 시작되었다. 데미안은 준비된 사람답게 러시아와의 관계 악화 및 전쟁 선포라는 국제 상황을 주의깊게 바라보고 있었고, 대위로서 전쟁에 참여한다. 싱클레어 또한 데미안으로부터 전쟁의 소식을 전해 듣고, 세계의 거센 흐름 앞에 자신에게 맞닥뜨린 운명을 대면하기 위해 전쟁터로 나간다. 싱클레어는 전쟁터에서 큰 부상을 당하게 되지만, 그것은 그가 그에게 주어진 절대적인 운명을 용기있게 대면한 결과일 뿐이었다.`;

    setWords(
      content
        .split(" ")
        .filter((word) => word.trim() !== "")
        .map((word) => word.trim()));
  }, []);

  // Navigating
  useEffect(() => {
    const keydownEvent = (e) => {
      if (e.key == "ArrowRight") {

        setWordIndex(index => {
          if (index < words.length - 1) {
            setAnimation(true);

            setTimeout(() => {
              setAnimation(false);
            }, 10);
            return index + 1;
          } else {
            return index;
          }
        });
      } else if (e.key == "ArrowLeft") {

        setWordIndex(index => {
          if (index > 0) {
            setAnimation(true);

            setTimeout(() => {
              setAnimation(false);
            }, 10);
            return index - 1;
          } else {
            return index;
          }
        });
      } else if (e.key == " ") {
        setSpacePressed(true);
      }
    };

    const keyupEvent = (e) => {

      if (e.key == " ") {
        setSpacePressed(false);
      }
    }

    window.addEventListener("keydown", keydownEvent);
    window.addEventListener("keyup", keyupEvent);

    return () => {
      window.removeEventListener("keydown", keydownEvent);
      window.removeEventListener("keyup", keyupEvent);
    };
  }, [words.length, wordIndex]);

  // Interval
  useEffect(() => {
    const interval = setInterval(() => {
      if (spacePressed) return;

      setWordIndex(index => {
        if (index < words.length - 1) {
          setAnimation(true);

          setTimeout(() => {
            setAnimation(false);
          }, 1);
          return index + 1;
        } else {
          return index;
        }
      });
    }, 1000 / (wpm / 60));

    return () => clearInterval(interval);
  }, [wpm, words.length, spacePressed]);

  // Config WPM
  useEffect(() => {
    const onPressedKeydown = (e) => {
      if (e.key === "Control") {
        setCtrlPressed(true);
      }

      if (e.key === "ArrowUp" && ctrlPressed) {
        setWpm(state => state + 10);
      }

      if (e.key === "ArrowDown" && ctrlPressed) {
        setWpm(state => state - 10);
      }
    };

    const onPressKeyUp = (e) => {
      if (e.key === "Control") {
        setCtrlPressed(false);
      }
    }

    document.addEventListener("keydown", onPressedKeydown);
    document.addEventListener("keyup", onPressKeyUp);

    return () => {
      document.removeEventListener("keydown", onPressedKeydown);
      document.removeEventListener("keyup", onPressKeyUp);
    }
  }, [ctrlPressed]);

  const onClickThemeChange = () => {
    setBlackTheme(state => !state);
  }

  return (
    <Background $blackTheme={blackTheme}>
      <WordWrapper>
        <Word $first={animation} $blackTheme={blackTheme}>
          {words[wordIndex]}
        </Word>
      </WordWrapper>
      <WpmDisplayWrapper $blackTheme={blackTheme}>
        {wpm}WPM<br />
        Index : {wordIndex + 1} / {words.length}<br />
        Estimated Reading Time : {Math.round(words.length / wpm * 60)}s<br />
        <ThemeChangeBtn onClick={() => onClickThemeChange()} $blackTheme={blackTheme}>
          {blackTheme ? "White Theme" : "Black Theme"}
        </ThemeChangeBtn>
      </WpmDisplayWrapper>

      <BackWrapper onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faArrowLeft} size="2xl" color="white" />
      </BackWrapper>

    </Background>
  )
}

export default App
