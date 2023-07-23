import { useEffect, useState } from "react";
import { styled } from "styled-components";
import propTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Background = styled.div`
    width: 100vw;
    height: 100vh;

    background-color: #181818;
`

const TitleWrapper = styled.div`
    width: 100vw;
    padding-top: 20vh;
    color: white;
    font-size: 3rem;

    font-weight: 700;
    text-align: center;
`;

const DescriptionWrapper = styled.div`
    width: 100vw;
    padding-top: 7px;
    font-size: 1.2rem;

    text-align: center;
    color: #d3d3d3;
`;

const MenuContainer = styled.div`
    width: 100vw;
    height: 60vh;
    margin-top: 40px;

    overflow: scroll;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const MenuBtnWrapper = styled.div`
    width: 100vw;
    height: 110px;
    
    background-color: #${(props) => props.$activated ? "282828" : "181818"};
    transition: background-color 0.1s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`;

const MenuBtn = ({ name, onClick }) => {
    const [activated, setActivated] = useState(false);

    const onHoverIn = () => {
        setActivated(true);
    }

    const onHoverOut = () => {
        setActivated(false);
    }

    const onClickInner = () => {
        onClick();
    }

    return <MenuBtnWrapper
        $activated={activated}
        onMouseEnter={() => onHoverIn()}
        onMouseLeave={() => onHoverOut()}
        onTouchStart={() => onHoverIn()}
        onTouchEnd={() => onHoverOut()}
        onClick={() => onClickInner()}
    >
        {name}
    </MenuBtnWrapper>
};

MenuBtn.propTypes = {
    name: propTypes.string,
    onClick: propTypes.func
}

export default function MenuPage() {
    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setMenus([
            "a", "b", "c", "d", "e", "f", "g", "h", "a", "b", "c", "d", "e", "f", "g", "h"
        ])
    }, []);

    return <Background>
        <TitleWrapper>
            Fast Word
        </TitleWrapper>
        <DescriptionWrapper>
            빠르게 글을 읽읍시다.
        </DescriptionWrapper>
        <MenuContainer>
            {menus.map((menu, index) => {
                return <MenuBtn key={index} name={menu} onClick={() => navigate("/inner")} />
            })}
        </MenuContainer>
    </Background>;
}