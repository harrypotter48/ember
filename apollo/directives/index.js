// import * as currencies from "./currencies"
// import * as dates from "./dates"
// import * as numbers from "./numbers"
// import * as phone from "./phone"
// import * as units from "./units"
import * as strings from "./strings"
import * as auth from "./auth"

// Export all durectives as default
export default {
  // ...currencies,
  // ...dates,
  // ...numbers,
  // ...phone,
  ...strings,
  ...auth,
  // ...units
}

// Export each directive individually
// export * from "./currencies"
// export * from "./dates"
// export * from "./numbers"
// export * from "./phone"
export * from "./strings"
export * from "./auth"
// export * from "./units"
