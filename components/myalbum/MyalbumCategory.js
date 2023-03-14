import style from "styles/myalbum/myalbumcategory.module.scss";

export default function MyalbumCategory({ onChange, catePage }) {
  return (
    <div className={style.myalbumCategory}>
      <ul className={style.Category_box}>
        <li
          style={
            catePage === "디지털 아트"
              ? { background: "#2288FF", color: "#FFFFFF" }
              : {}
          }
          onClick={() => {
            onChange("디지털 아트");
          }}
        >
          디지털 아트
        </li>
        <li
          style={
            catePage === "일러스트"
              ? { background: "#2288FF", color: "#FFFFFF" }
              : {}
          }
          onClick={() => {
            onChange("일러스트");
          }}
        >
          일러스트
        </li>
        <li
          style={
            catePage === "수채화"
              ? { background: "#2288FF", color: "#FFFFFF" }
              : {}
          }
          onClick={() => {
            onChange("수채화");
          }}
        >
          수채화
        </li>
        <li
          style={
            catePage === "유화"
              ? { background: "#2288FF", color: "#FFFFFF" }
              : {}
          }
          onClick={() => {
            onChange("유화");
          }}
        >
          유화
        </li>
        <li
          style={
            catePage === "픽셀아트"
              ? { background: "#2288FF", color: "#FFFFFF" }
              : {}
          }
          onClick={() => {
            onChange("픽셀아트");
          }}
        >
          픽셀 아트
        </li>
        <li
          style={
            catePage === "포토리얼리즘"
              ? { background: "#2288FF", color: "#FFFFFF" }
              : {}
          }
          onClick={() => {
            onChange("포토리얼리즘");
          }}
        >
          포토리얼리즘
        </li>
      </ul>
    </div>
  );
}
