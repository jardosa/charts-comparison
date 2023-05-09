import Chart from "@/modules/chart/Chart";
import {plotlyData} from "@/resources/data";
import { GetServerSideProps } from "next/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      type: context.query.type
    }
  }
}

const ChartPage = ({type}: {type: keyof typeof plotlyData}) => <Chart type={type} />

export default ChartPage