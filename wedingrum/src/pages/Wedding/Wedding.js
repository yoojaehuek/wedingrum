import React from 'react';
import Header from '../../components/Header/Header';
import './wedding.scss';



function Wedding() {
  return (
    <div className="App">
      <Header></Header>

      

      <div class="contents">
        <header>
          <div id="background">
            <img src=""/>
          </div>
          <div class="big_tit">
            <h3>WEDDING</h3>
            <h1>아펠가모 잠실</h1>
          </div>
        </header>
        
        <div class="main">
          <nav>
            <ul>
              <li><a href='/잠실' class="active">아펠가모 잠실</a></li>
              <li><a href='/반포'>아펠가모 반포</a></li>
              <li><a href='/광화문'>아펠가모 광화문</a></li>
              <li><a href='/선릉'>아펠가모 선릉</a></li>
              <li><a href='/공덕'>아펠가모 공덕</a></li>
            </ul>
          </nav>
  
          <div class="inner">
            <div class="center_first">
              <h1>
                <span>The Banquet</span>
                "잠실점"
              </h1>
            </div>
  
            <div class="center_seccond">
              <h3>화려함과 모던함이 공존하는 호텔형 웨딩홀</h3>
              <p class="pdt20">
                넓고 여유로운 공간 구성 속 고급스러운 감각이 돋보이는 아펠가모의 첫 번째 웨딩 플레이스<br/>
                신랑신부 두 사람을 향해 아낌없이 쏟아지는 축복을 만끽할 수 있는 버진로드와<br/>
                무대가 잊을 수 없는 순간을 선사합니다.
              </p>
            </div>
    
            <div class="center_third">
              <img src=""/>
              <div id="nemo">
                <div class="information">
                  <h2>Information</h2>
                  <p>
                    예식간격 : 1시간 30분<br/>
                    예식시간 : 11:00 · 12:30 · 14:00 · 15:30 · 17:00 · 18:30<br/>
                    수용인원 : 웨딩홀 160석 · 피로연장 500석<br/>
                    주차시설 : 200대
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="center_fourth">
            <div class="slidebox">
              <div class="slide">

              </div>
            </div>
            <div class="l_arrow"></div>
            <div class="r_arrow"></div>
            <div class="gallery">
              <div class="sub_tit">
                <h2></h2>
                <div class="gallery_btn">
                  <a class="btn_boline"></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="foooter">
          <div class="foooter_txt">
            <div class="tit">
              <h1>Location</h1>
            </div>
            <div class="txt">
              <p>서울특별시 송파구 올림픽로 35길 137 (신천동), 한국광고문화회관 2층</p>
              <p>02 2144 0230</p>
              <p>
                Blue 간선 : 301, 302, 303, 320, 341, 351, 360, 362, N13<br/>
                Red 광역 : 116, 119, 1001, 1007, 1009, 1112, 1115-6, 1117, 1650, 9403, M2316<br/>
                Green 지선 : 2311, 2412, 2415, 3216, 3217, 3313, 3314, 3315, 3317, 3318, 3411, 3412, 3413, 3414, 4318, 4319<br/>
                White 시외 : 16, 30-1, 30-3, 30-5, 32, 70, 101, 116, 119, 2000-2<br/>
                <span>※ 잠실역 사거리에서 하차 후, 잠실대교 남단 교차로에서 우회전 한국광고문화회관 2층</span>
              </p>
              <p>
                <span>잠실역 7번출구(2호선, 8호선)</span>
                " 방향으로 나와 잠실대교 방면 200m 직진 후 삼거리에서 우회전 한국광고문화회관 2층 (도보 5분)"
              </p>
              <p>
                <span>용인 및 과천방향</span>
                " - 청담대로 진입 후 (동부간선도로 방면) 직진 {'>'} 천호대교, 잠실대교(우측방향) {'>'} 잠실대교 진입 후 (잠실대교 남단) > 잠실나루역 방향 (좌회전) > 한국광고문화회관" <br/>
                <span>강동, 강북 방면</span>
                "- 올림픽대로&강변북로 직진 {'>'} 잠실대교 진입 후 송파대로 이동 {'>'} 잠실대교 남단 잠실나루역 방향 (좌회전) > 한국광고문화회관" <br/>
                <span>강서 방향</span>
                "- 강변북로&올림픽대로 (잠실대교방면) {'>'} 잠실대교 남단 잠실나루역 방향 (좌회전) > 한국광고문화회관" <br/>
              </p>
            </div>
          </div>
          <div class="map_area">
            <div class="map"></div>
            <div class="map_btn">
              <a>약도 다운로드</a>
              <a>지도 크게보기</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wedding;