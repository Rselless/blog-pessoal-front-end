function Home() {
    return (
        <>
            <div style={{
                backgroundColor: "#f3cbf7",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                margin: "0",
                padding: "2rem",
            }}>
                <div>
                    <div style={{
                         width: "80vw",
                         fontSize: "2.5rem",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <h2>Se aconchegue!</h2>
                        <p>Expresse aqui seus pensamentos e opiniões</p>
                    </div>

                    <div style={{
                         width: "80vw",
                         display: "flex",
                         flexDirection: "column",
                         alignItems: "center"
                    }}>
                        <img 
                            src="https://i.imgur.com/VpwApCU.png" 
                            alt="Imagem da Página Home" 
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home