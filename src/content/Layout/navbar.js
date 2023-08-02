import { AppBar, Avatar, Box, Link, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
	return (
		<AppBar
			position="fixed"
			sx={{
				py: "10px",
				backgroundColor: "rgba(0,0,0,.4)",
				backdropFilter: "blur(10px)",
			}}
		>
			<Toolbar
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
					}}
				>
					<img
						src="https://www.alturanft.com/logo-svg.svg"
						alt="Altura_logo"
					/>
					<Typography variant="h5" color="inherit" noWrap>
						<span
							style={{
								color: "rgb(246 90 226)",
								fontWeight: "900",
							}}
						>
							Altura
						</span>
						&nbsp; NFT Marketplace
					</Typography>
				</Box>
				<Box
					sx={{
						display: "flex",
						flexDirection: "row-reverse",
						alignItems: "center",
						gap: "20px",
					}}
				>
					<Avatar
						alt="Tomas. D"
						src="https://avatars.githubusercontent.com/u/122877914?s=400&u=8594946c8d1ca3a8d6586a0990da71a32178ace2&v=4"
						sx={{ width: "40px", height: "40px" }}
					/>
					<Link
						href="mailto:athene227@gmail.com"
						sx={{
							color: "white",
							textDecoration: "none",
						}}
					>
						<Typography variant="body1">
							<span style={{ color: "gray" }}>Mail to : </span>
							Tomas. D.
						</Typography>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
