import { IconType } from 'types/utils.types'

export const BallLoader = ({ fill = '#556EE6', className = '' }: IconType) => (
	<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
		<rect
			fill={fill}
			stroke={fill}
			className={className}
			strokeWidth='15'
			strokeLinejoin='round'
			width='30'
			height='30'
			x='85'
			y='85'
			rx='0'
			ry='0'
		>
			<animate
				attributeName='rx'
				calcMode='spline'
				dur='2'
				values='15;15;5;15;15'
				keySplines='.5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1'
				repeatCount='indefinite'
			></animate>
			<animate
				attributeName='ry'
				calcMode='spline'
				dur='2'
				values='15;15;10;15;15'
				keySplines='.5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1'
				repeatCount='indefinite'
			></animate>
			<animate
				attributeName='height'
				calcMode='spline'
				dur='2'
				values='30;30;1;30;30'
				keySplines='.5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1'
				repeatCount='indefinite'
			></animate>
			<animate
				attributeName='y'
				calcMode='spline'
				dur='2'
				values='40;170;40;'
				keySplines='.6 0 1 .4;0 .8 .2 1'
				repeatCount='indefinite'
			></animate>
		</rect>
	</svg>
)

export const PencilIcon = ({ fill = '#fff', className = '' }: IconType) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='10px'
		height='10px'
		viewBox='0 0 512.000000 512.000000'
		preserveAspectRatio='xMidYMid meet'
		className={className}
	>
		<g
			transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'
		>
			<path
				d='M2388 3223 l-1716 -1716 -246 -625 c-266 -675 -262 -661 -202 -690
33 -16 -38 -42 746 268 l535 211 1718 1717 c1359 1360 1717 1722 1717 1742 0
36 -774 810 -810 810 -20 0 -383 -358 -1742 -1717z m2062 1222 l315 -315 -265
-265 -265 -265 -317 317 -318 318 262 262 c145 145 265 263 268 263 3 0 147
-142 320 -315z m-630 -630 l315 -315 -100 -100 -100 -100 -317 317 -318 318
97 97 c54 54 100 98 103 98 3 0 147 -142 320 -315z m-547 -53 l67 -67 -1185
-1185 -1185 -1185 -70 70 -70 70 1182 1182 c651 651 1185 1183 1188 1183 3 0
36 -30 73 -68z m247 -247 l75 -75 -1185 -1185 -1185 -1185 -77 77 -78 78 1182
1182 c651 651 1185 1183 1188 1183 3 0 39 -34 80 -75z m-870 -1500 l-1185
-1185 -70 70 -70 70 1185 1185 1185 1185 70 -70 70 -70 -1185 -1185z m-1596
-964 c158 -158 284 -291 278 -295 -15 -9 -540 -216 -549 -216 -5 0 -62 54
-128 120 l-119 119 78 198 c43 109 92 235 109 281 18 45 34 82 37 82 3 0 135
-130 294 -289z m-491 -489 c37 -38 67 -73 67 -78 0 -8 -241 -106 -247 -101 -6
7 93 247 102 247 6 0 41 -31 78 -68z'
			/>
		</g>
	</svg>
)

export const CheckIcon = ({ fill = '#76ec52', className = '' }: IconType) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='10px'
		height='10px'
		viewBox='0 0 512.000000 512.000000'
		preserveAspectRatio='xMidYMid meet'
		className={className}
	>
		<g
			transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'
		>
			<path
				d='M4605 4386 c-105 -33 -109 -36 -1445 -1372 l-1315 -1314 -595 595
c-553 551 -600 596 -662 625 -159 74 -328 51 -454 -63 -100 -90 -149 -234
-125 -364 25 -134 9 -117 839 -944 726 -724 771 -767 832 -794 78 -34 185 -44
257 -25 122 33 70 -16 1629 1543 1614 1616 1522 1517 1547 1660 34 199 -91
392 -292 453 -56 17 -162 17 -216 0z'
			/>
		</g>
	</svg>
)

export const CloseIcon = ({ fill = '#ec5252', className = '' }: IconType) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='8.5px'
		height='8.5px'
		viewBox='0 0 512.000000 512.000000'
		preserveAspectRatio='xMidYMid meet'
		className={className}
	>
		<g
			transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'
		>
			<path
				d='M580 5099 c-111 -18 -171 -59 -341 -228 -127 -127 -162 -168 -187
-221 -62 -129 -62 -270 0 -400 29 -59 102 -135 847 -882 l815 -818 -815 -818
c-745 -747 -818 -823 -847 -882 -62 -130 -62 -271 0 -400 25 -53 60 -94 187
-221 197 -197 240 -222 397 -227 112 -5 169 8 254 56 28 16 351 331 858 836
l812 810 818 -815 c956 -954 870 -884 1082 -884 122 0 127 1 195 34 59 29 95
59 226 190 127 127 162 168 187 221 62 129 62 270 0 400 -29 59 -102 135 -847
882 l-815 818 815 818 c745 747 818 823 847 882 62 130 62 271 0 400 -25 53
-60 94 -187 221 -127 127 -168 162 -221 187 -129 62 -270 62 -400 0 -59 -29
-135 -102 -882 -847 l-818 -815 -817 816 c-755 753 -823 818 -883 846 -36 17
-95 36 -130 41 -73 12 -74 12 -150 0z'
			/>
		</g>
	</svg>
)

export const SwapIcon = ({ fill = '#495059', className = '' }: IconType) => (
	<svg
		version='1.0'
		xmlns='http://www.w3.org/2000/svg'
		width='50px'
		height='50px'
		viewBox='0 0 512.000000 512.000000'
		preserveAspectRatio='xMidYMid meet'
		className={className}
	>
		<g
			transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
			fill={fill}
			stroke='none'
		>
			<path
				d='M1360 4707 c-47 -14 -892 -848 -933 -921 -38 -67 -38 -145 1 -212 18
-33 174 -194 462 -480 461 -456 458 -454 550 -454 124 0 240 116 240 240 0 86
-13 104 -244 338 l-220 222 1330 0 c1505 0 1390 -6 1467 80 90 100 90 220 0
320 -77 86 38 80 -1467 80 l-1330 0 220 223 c181 182 222 229 232 263 27 95 8
169 -63 239 -70 71 -151 91 -245 62z'
			/>
			<path
				d='M3600 2467 c-19 -6 -58 -34 -85 -62 -71 -70 -90 -144 -63 -239 10
-34 51 -81 232 -263 l220 -223 -1328 0 c-1014 0 -1338 -3 -1370 -12 -86 -26
-166 -136 -166 -228 0 -92 80 -202 166 -228 32 -9 356 -12 1370 -12 l1328 0
-220 -222 c-231 -234 -244 -252 -244 -338 0 -124 116 -240 240 -240 91 0 90
-2 550 454 290 287 444 447 463 479 21 38 27 63 27 107 0 44 -6 69 -27 107
-19 32 -173 192 -463 479 -368 364 -441 432 -476 442 -50 14 -106 14 -154 -1z'
			/>
		</g>
	</svg>
)