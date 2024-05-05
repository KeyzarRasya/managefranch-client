export default function FormsIdentity(){
    return (
        <>
                    <Grid item xs={6}>
                        <TextField style={{borderColor:'white'}} fullWidth margin="normal" color="secondary" name="umkmName" label="Nama UMKM" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField fullWidth margin="normal" color="secondary" name="pemilik" label="Nama Pemilik" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="secondary" name="alamat" label="Alamat" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="secondary" name="email" label="Email" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth margin="normal" color="secondary" name="password" label="Password" type="password" onChange={dataOnChange} variant="outlined"/>
                    </Grid>
                    <Grid item xs={6}></Grid>
        </>
    )
}