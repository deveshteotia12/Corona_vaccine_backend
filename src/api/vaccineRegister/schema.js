const yup=require('yup')

exports.RegSchema=yup.object().shape({
   Name: yup.string().required(),
   DOB: yup.string().required(),
   Gender: yup.string().required(),
   ID: yup.string().min(6).max(7).required(),
   scheduled: yup.bool().default(false),
   vaccinated: yup.bool().default(false),
})

exports.appointSchema=yup.object().shape({
       hospitalID: yup.string().required(),
       districtID: yup.string().required(),
       stateID: yup.string().required(),
       selectedDate: yup.string().required(),
       ID: yup.string().required()
})



const stateData={
   stateName: "Uttar Pradesh",
   stateCode: "1S"
}

const districtData={
   stateCode: "1S",
   Districts: [{
      districtName: "Bulandshahr",
      districtCode: "1S1D"
   }]
}

