-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.3.11-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- 테이블 wedingrumdb.products 구조 내보내기
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '상품 아이디 (기본키)',
  `name` varchar(200) NOT NULL COMMENT '상품 이름',
  `price` int(11) NOT NULL COMMENT '상품 가격',
  `imageUrl` varchar(255) NOT NULL COMMENT '이미지 URL 주소',
  `galleryImages` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '갤러리 이미지 배열',
  `category` varchar(255) NOT NULL COMMENT '상품 카테고리',
  `title` varchar(255) DEFAULT NULL COMMENT '상품 제목',
  `description` varchar(255) DEFAULT NULL COMMENT '상품 설명',
  `detailType` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '상세 정보 배열',
  `detailDescription` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '상세 정보 설명',
  `detailPrice` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '상세 정보 가격',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 테이블 데이터 wedingrumdb.products:~1 rows (대략적) 내보내기
INSERT INTO `products` (`id`, `name`, `price`, `imageUrl`, `galleryImages`, `category`, `title`, `description`, `detailType`, `detailDescription`, `detailPrice`) VALUES
	(1, '축가', 165000, '/image/Product/category/Etc/weddingSong.jpg', '["/image/Product/category/Etc/weddingSong.jpg", "/image/Product/category/Etc/weddingSong2.jpg"]', 'prodetc', '[더채플 · 아펠가모 · 루벨]', ' 아름다운 노래로 신랑, 신부님에게 축복을 전해드립니다. ', '["축가 1인", "축가 2인"]', '["1인 축가, 1곡", "2인 축가, 1곡"]', '[165000, 220000]');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
