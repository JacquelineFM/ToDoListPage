const RefreshButton = ({ styles }) => {
  return (
    <button className={styles} onClick={() => window.location.reload()}>
      Refresh
    </button>
  );
};

export default RefreshButton;
