// LeftDate 컴포넌트
import React from 'react';
import { useRecoilState } from "recoil";
import { startDateState, timeState, monthState, pointState, contactChoiceState, themeState } from "../../../recoil/atoms/loginState";

const LeftDate = ({ selectedTime, selectedDay }) => {
  const [startDate, setStartDate] = useRecoilState(startDateState); //useState와 거의 비슷한 사용법
  const [time, setTime] = useRecoilState(timeState); //useState와 거의 비슷한 사용법
  const [month, setMonth] = useRecoilState(monthState); //useState와 거의 비슷한 사용법
  const [point, setPoint] = useRecoilState(pointState); //useState와 거의 비슷한 사용법
  const [contactChoice, setcontactChoice] = useRecoilState(contactChoiceState); //useState와 거의 비슷한 사용법
  const [theme, settheme] = useRecoilState(themeState); //useState와 거의 비슷한 사용법


  const user = {
    brand: 'WeddingRoom',
    point: point,
    contactChoice:contactChoice,
    theme:theme,
    start: startDate,
    time: time, // 선택된 시간을 받아옵니다.
    month: month, // 선택된 요일을 받아옵니다.
  };

  return (
    <div className="left-Date">
      <dl>
        <dt>브랜드</dt>
        <dd>
          <span>{user.brand}</span>
        </dd>
      </dl>
      <dl>
        <dt>지점</dt>
        <dd>
          <span>{user.point}</span>
        </dd>
      </dl>
      <dl>
        <dt>방문일</dt>
        <dd>
          <span>{user.start}</span>
        </dd>
      </dl>
      <dl>
        <dt>희망 시간대</dt>
        <dd>
          <span>{user.time}</span>
        </dd>
      </dl>
      <dl>
        <dt>선호하는 연락 방법</dt>
        <dd>
          <span>{user.contactChoice}</span>
        </dd>
      </dl>
      <dl>
        <dt>빙문 인원</dt>
        <dd>
          <span>{user.theme}</span>
        </dd>
      </dl>
      <dl>
        <dt>상담사</dt>
        <dd>
          <span>{user.month}</span>
        </dd>
      </dl>
    </div>
  );
};

export default LeftDate;
