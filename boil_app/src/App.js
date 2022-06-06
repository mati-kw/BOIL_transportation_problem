import SupplierTab from "./tables/SupplierTab";
import RecipientTab from "./tables/RecipientTab";
import TranportCostTab from "./tables/TransportCostTab"
import UnitProfitTab from "./tables/UnitProfitTab";
import OptimalTransportTab from "./tables/OptimalTransportTab"
import ParametersTab from "./tables/ParametersTab";
import {compute} from "./logic";

function App() {
  return (
    <div>
      <SupplierTab />
      <RecipientTab />
      <TranportCostTab />
      
      <div className="w-25 p-3" ><button class="btn btn-danger" onClick={compute}>Compute</button></div>

      <UnitProfitTab />
      <OptimalTransportTab />
      <ParametersTab />

    </div>
  );
}

export default App;
