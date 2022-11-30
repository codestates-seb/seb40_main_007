const ReportHeader = () => {
  const chartList = [
    "번호",
    "작성자 닉네임",
    "게시글 제목",
    "총 신고횟수",
    "신고 사유 1",
    "신고 사유 2",
    "신고 사유 3",
    "신고 사유 4",
    "신고 사유 5",
  ];
  return (
    <div className="flex flex-row justify-between items-center py-1.5 text-sm font-semibold text-white bg-[#59AEEC] mr-[14px]">
      {chartList.map((el, index) => (
        <p key={index} className="basis-1/12 flex justify-center">
          {el}
        </p>
      ))}
      <p className="basis-2/12 flex justify-center">기능</p>
    </div>
  );
};

export default ReportHeader;
