import {
  DashboardConsumer,
  DashboardProvider,
} from "../../context/DashboardContext";
import { DashboardContextValue } from "../../context/DashboardContext/DashboardContext.types";
import DashboardMain from "../DashboardMain";
import DashboardWithTx from "../DashboardWithTx/DashboardWithTx";

function Dashboard() {
  return (
    <>
      <DashboardProvider>
        <DashboardConsumer>
          {(value: DashboardContextValue | undefined) => {
            if (!value?.isInitial) return <DashboardWithTx />;
            return <DashboardMain />;
          }}
        </DashboardConsumer>
      </DashboardProvider>
    </>
  );
}

export default Dashboard;
