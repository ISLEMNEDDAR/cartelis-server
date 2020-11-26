const EXCEPTION = {
    divisionByZero : "Diviser par zero",
    Error : "Error",
    dateComparaison : "dateEnd before dateStart"
}

const CONFIG = {
    TOKEN_CREDENTIALS : {
        client_secret : "c_BpPE7vpC80ae_luwutitzi",
        client_id : "983290473021-u8v3cb7aspt3oe657afjhe1h8db3k0q2.apps.googleusercontent.com",
        redirect_url : "http://localhost:3600/api/callback"
    },
    SCOPES : ['https://www.googleapis.com/auth/spreadsheets'],
    TOKEN : { access_token: 'ya29.a0AfH6SMBM5-MJJV6sI6Wss9f6U4fo8s0jpKM30wa_nrmtqv4tjgmbTEs5gSGi36AjEDRWGEry61DjOfHGEGbWI7UZ-kbywX94tmRAIZrkBMrXzXG1I0uzygZUda9bqfbgZweghrnS_-UFLZ7NZ6eBllkzuV73zUy50CXK1QZKw0Q',
        refresh_token: '1//03iHskNEjxdmcCgYIARAAGAMSNwF-L9IrTziZJpNYKYvX3Eh8zMm1gxdFvp9YC6w-aq6WIBoY_wTk1VzcvoXbYzSHlb8Pfq383Hw',
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        token_type: 'Bearer',
        expiry_date: 1606317397814
    }
}


export {EXCEPTION,CONFIG}