import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const port = 3002;
const imagesDirectory = path.join(__dirname, "../src/assets/marquee"); // 이미지 폴더 경로

app.use(cors({ origin: "http://localhost:3001" }));

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
