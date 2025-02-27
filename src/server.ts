import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// .env 파일 로드
dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const imagesDirectory = path.join(__dirname, "../src/assets/marquee"); // 이미지 폴더 경로

app.use(
  cors({
    origin:
      process.env.FRONTEND_URL ||
      "http://localhost:3000/publisher-portfolio2025",
  })
);

// 정적 파일 서비스 (이미지 파일 경로에 접근하도록 설정)
app.use("/images", express.static(imagesDirectory));

// 이미지 목록을 반환하는 API
app.get("/api/images", (req: Request, res: Response) => {
  fs.readdir(imagesDirectory, (err, files) => {
    if (err) {
      console.error("디렉토리 읽기 오류:", err); // 오류 메시지 출력
      return res.status(500).send("서버 오류");
    }

    // 이미지 파일만 필터링 (jpg, png, gif 확장자)
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    // 이미지 목록 반환
    res.json(imageFiles);
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
