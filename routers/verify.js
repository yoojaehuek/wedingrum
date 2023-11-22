const express = require('express');
const router = express.Router();
const redis = require('redis');
require('dotenv').config();
const { verify, refreshVerify, makeAccessToken, makeRefreshToken} = require("../utils/token");

const redisClient = redis.createClient({
	password : process.env.REDIS_PASSWORD,
		socket : {
			host : process.env.REDIS_HOST,
			port : process.env.REDIS_PORT
	},
	legacyMode: true,
})
redisClient.connect();

// POST 요청을 처리하는 라우터 핸들러
router.post('/', async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    const refreshToken = req.cookies.refreshToken;

    if (accessToken == undefined) { //accToken 쿠키없음
      if (refreshToken == undefined) { //refreshToken 쿠키도 없음

        //다시로그인!

      }else{ //accToken은 없는데 reToken은 있음 
        // const userId = redisClient.keys('123');
        
        //reToken으로 accToken재생성
        // const newAccessToken = makeAccessToken({id: userId});
        // res.cookie('accessToken', newAccessToken, {
        //   httpOnly : true,
        //   secure : false,
        //   sameSite : 'strict',
        //   maxAge: 360000 // 6시간 만료
        // });
        
      }
    }else{ //accToken있음

      //통과!
    }


    // 요청 헤더에서 전달된 토큰을 검증하고, 검증 결과를 반환받음
    const result = verify(req.cookies.accessToken);
    // 클라이언트에게 토큰의 유효성 여부를 응답으로 전송
    res.json(result.ok);
  } catch (error) {
    // 오류 발생 시 에러 로그를 출력
    console.error(error);
    // 에러 응답 전송 (클라이언트에서 토큰 유효성 검증 실패를 처리할 수 있도록)
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;