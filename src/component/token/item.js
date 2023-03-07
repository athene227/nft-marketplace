import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography
} from "@mui/material"

import TouchRipple from "@mui/material/ButtonBase/TouchRipple";
import { useState, useRef } from "react";

import EtherIcon from "../icon/ethereum";

const TokenItem = ({token}) => {
	const [up, setUp] = useState(false);

	const rippleRef = useRef(null);
	const buttonRef = useRef(null);

	const triggerRipple = () => {
		const container = buttonRef.current;
		const rect = container.getBoundingClientRect();
		console.log(rect);

		rippleRef.current.start(
			{
				clientX: rect.left + rect.width / 2,
				clientY: rect.top + rect.height / 2,
			},
			// when center is true, the ripple doesn't travel to the border of the container
			{ center: false },
		);

		setTimeout(() => rippleRef.current.stop({}), 320);
	};

	return (
		<>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					overflow:'hidden',
					position: 'relative'
				}}
				ref={buttonRef}
				className="wave-effect"
				onMouseOver={() => setUp(true)}
				onMouseOut={() => setUp(false)}
			>
				<TouchRipple ref={rippleRef} center sx={{
					width: 'full',
					height: 'full',
					zIndex: 9999
				}} />
				<CardMedia
					component="img"
					sx={{
						height: 200,
						scale: up ? '1.1' : 'initial',
						transformOrigin: 'bottom',
						transition: 'all .5s linear'
					}}
					image={token.banner}
					onClick={triggerRipple}
					loading="lazy"
					src='/logo.png'
					alt={token.name}
				>
				</CardMedia>

				<CardContent sx={{ flexGrow: 1 }}>
					<Typography gutterBottom variant="h5" component="h2">
						{token.name}
					</Typography>
				</CardContent>

				<CardActions sx={{display:"flex", justifyContent:'space-between'}}>
					<Button size="small" sx={{display:"flex", alignItems:'center'}}>
						<EtherIcon />
						<Typography>
							{Number(token.windowCollectionStats.volume.unit).toFixed(4)}
						</Typography>
					</Button>
					<Button size="small">Edit</Button>
				</CardActions>
			</Card>
		</>
	)
}

export default TokenItem;