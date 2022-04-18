import PrimeVue from "primevue/config";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Paginator from "primevue/paginator";
import Dropdown from "primevue/dropdown";
import MultiSelect from "primevue/multiselect";
import InputSwitch from "primevue/inputswitch";
import Dialog from "primevue/dialog";
import Menubar from "primevue/menubar";
import OverlayPanel from "primevue/overlaypanel";
import Calendar from "primevue/calendar";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import AutoComplete from "primevue/autocomplete";
import Textarea from "primevue/textarea";
import Carousel from "primevue/carousel";
import Galleria from "primevue/galleria";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
export default (app) => {
  app.component("Galleria", Galleria);
  app.component("Carousel", Carousel);
  app.component("InputText", InputText);
  app.component("InputSwitch", InputSwitch);
  app.component("Button", Button);
  app.component("Paginator", Paginator);
  app.component("Dropdown", Dropdown);

  app.component("Dialog", Dialog);
  app.component("Menubar", Menubar);
  app.component("OverlayPanel", OverlayPanel);
  app.component("Calendar", Calendar);
  app.component("Checkbox", Checkbox);
  app.component("RadioButton", RadioButton);
  app.component("MultiSelect", MultiSelect);
  app.component("AutoComplete", AutoComplete);
  app.component("Textareaprime", Textarea);
  app.use(PrimeVue);
  return app;
};
