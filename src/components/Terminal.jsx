import * as React from 'react';
import { useState } from 'react';

function SvgComponent(props) {
  const [isPlaying, setIsPlaying] = useState('running');

  const playingState = () => {
    if (isPlaying === 'running') {
      setIsPlaying('paused');
    } else {
      setIsPlaying('running');
    }
  };

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      className='prefix__terminalfont'
      id='prefix__terminal'
      baseProfile='full'
      viewBox='0 0 1007 591'
      width={1007}
      {...props}
    >
      <defs>
        <style type='text/css' id='generated-style'>
          {
            '@keyframes roll{0%{transform:translateY(0)}1.198%{transform:translateY(-544px)}1.213%{transform:translateY(-1088px)}8.283%{transform:translateY(-1632px)}8.605%{transform:translateY(-2176px)}11.249%{transform:translateY(-2720px)}12.009%{transform:translateY(-3264px)}14.814%{transform:translateY(-3808px)}17.268%{transform:translateY(-4352px)}18.671%{transform:translateY(-4896px)}19.956%{transform:translateY(-5440px)}21.592%{transform:translateY(-5984px)}22.527%{transform:translateY(-6528px)}25.683%{transform:translateY(-7072px)}28.955%{transform:translateY(-7616px)}30.241%{transform:translateY(-8160px)}33.265%{transform:translateY(-8704px)}33.28%{transform:translateY(-9248px)}33.689%{transform:translateY(-9792px)}33.733%{transform:translateY(-10336px)}33.776%{transform:translateY(-10880px)}34.273%{transform:translateY(-11424px)}34.302%{transform:translateY(-11968px)}85.391%,to{transform:translateY(-12512px)}}text{dominant-baseline:text-before-edge;white-space:pre}:root{--animation-duration:6845ms}'
          }
        </style>
        <style type='text/css' id='user-style'>
          {
            '.prefix__foreground{fill:#f8f8f2}.prefix__background{fill:#090B10}.prefix__color0{fill:#272822}.prefix__color2{fill:#c3e88d}.prefix__color4{fill:#89ddff}.prefix__color7{fill:#f8f8f2}.prefix__color8{fill:#75715e}.prefix__color10{fill:#c3e88d}.prefix__color14{fill:#89ddff}'
          }
        </style>
      </defs>
      <rect
        id='prefix__terminalui'
        className='prefix__background'
        width='100%'
        height='100%'
        ry={4.583}
      />
      <circle
        className='cursor-pointer'
        cx={24}
        cy={23}
        r={7}
        fill='#f92672'
        onClick={() => playingState()}
      />
      <circle cx={44} cy={23} r={7} fill='#f4bf75' />
      <circle cx={64} cy={23} r={7} className='prefix__color2' />
      {isPlaying === 'paused' ? (
        <text
          fontWeight='bold'
          x={80}
          y={15}
          fill='#f92672'
          className='blinking jetbrains'
          fontSize='14'
        >
          {'Animation Paused'}
        </text>
      ) : (
        <text
          fontWeight='bold'
          x={80}
          y={15}
          fontSize='14'
          className='houdini prefix__color2 jetbrains'
        >
          {'Animation Playing'}
        </text>
      )}

      <svg
        width={960}
        height={480}
        x={23}
        y={50}
        viewBox='0 0 960 480'
        preserveAspectRatio='xMidYMin slice'
        fontFamily='JetBrainsMono Nerd Font'
        fontSize={14}
        {...props}
      >
        <rect className='prefix__background' height='100%' width='100%' />
        <defs>
          <g id='prefix__g1'>
            <text textLength={8} className='prefix__background' />
            <text x={8} textLength={952} className='prefix__foreground' />
          </g>
          <g id='prefix__g2'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text x={104} textLength={8} className='prefix__background' />
            <text x={112} textLength={648} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g3'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={8}
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'n'}
            </text>
            <text x={112} textLength={8} className='prefix__background' />
            <text x={120} textLength={640} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g4'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={16}
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'no'}
            </text>
            <text x={120} textLength={8} className='prefix__background'>
              {'d'}
            </text>
            <text
              x={128}
              textLength={80}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'e stack.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g5'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={24}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'nod'}
            </text>
            <text x={128} textLength={8} className='prefix__background'>
              {'e'}
            </text>
            <text
              x={136}
              textLength={72}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'stack.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g6'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text x={136} textLength={8} className='prefix__background' />
            <text
              x={144}
              textLength={64}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'stack.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g7'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text x={144} textLength={8} className='prefix__background'>
              {'s'}
            </text>
            <text
              x={152}
              textLength={56}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'tack.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g8'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={8}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'s'}
            </text>
            <text x={152} textLength={8} className='prefix__background'>
              {'t'}
            </text>
            <text
              x={160}
              textLength={48}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'ack.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g9'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={16}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'st'}
            </text>
            <text x={160} textLength={8} className='prefix__background'>
              {'a'}
            </text>
            <text
              x={168}
              textLength={40}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'ck.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g10'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={24}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'sta'}
            </text>
            <text x={168} textLength={8} className='prefix__background'>
              {'c'}
            </text>
            <text
              x={176}
              textLength={32}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'k.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g11'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={32}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'stac'}
            </text>
            <text x={176} textLength={8} className='prefix__background'>
              {'k'}
            </text>
            <text
              x={184}
              textLength={24}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g12'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={40}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'stack'}
            </text>
            <text x={184} textLength={8} className='prefix__background'>
              {'.'}
            </text>
            <text
              x={192}
              textLength={16}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g13'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={48}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'stack.'}
            </text>
            <text x={192} textLength={8} className='prefix__background'>
              {'j'}
            </text>
            <text
              x={200}
              textLength={8}
              fontWeight='bold'
              className='prefix__color8'
            >
              {'s'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g14'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={56}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'stack.j'}
            </text>
            <text x={200} textLength={8} className='prefix__background'>
              {'s'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g15'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={64}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'stack.js'}
            </text>
            <text x={208} textLength={8} className='prefix__background' />
            <text x={216} textLength={544} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g16'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text
              x={104}
              textLength={32}
              fontWeight='bold'
              className='prefix__color10'
            >
              {'node'}
            </text>
            <text
              x={136}
              textLength={8}
              fontWeight='bold'
              className='prefix__foreground'
            />
            <text
              x={144}
              textLength={64}
              fontWeight='bold'
              textDecoration='underline'
              className='prefix__foreground'
            >
              {'stack.js'}
            </text>
            <text x={208} textLength={552} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3248'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:00 \uF017'}
            </text>
          </g>
          <g id='prefix__g28'>
            <text textLength={8} className='prefix__background' />
            <text
              x={8}
              textLength={952}
              fontWeight='bold'
              className='prefix__foreground'
            />
          </g>
          <g id='prefix__g29'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={8} className='prefix__foreground' />
            <text x={104} textLength={8} className='prefix__background' />
            <text x={112} textLength={648} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3249'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:02 \uF017'}
            </text>
          </g>
          <g id='prefix__g30'>
            <text textLength={8} className='prefix__foreground' />
            <text x={8} textLength={80} className='prefix__color0'>
              {'\uF07C ~/about'}
            </text>
            <text x={88} textLength={8} className='prefix__color4'>
              {'\uE0B0'}
            </text>
            <text x={96} textLength={664} className='prefix__foreground' />
            <text x={760} textLength={8} className='prefix__color0'>
              {'\uE0B2'}
            </text>
            <text x={768} textLength={24} className='prefix__color2'>
              {'\uF00C'}
            </text>
            <text x={792} textLength={8} fill='gray'>
              {'\uE0B2'}
            </text>
            <text x={800} textLength={48} className='prefix__color0'>
              {'3249'}
            </text>
            <text x={848} textLength={8} className='prefix__color7'>
              {'\uE0B2'}
            </text>
            <text x={856} textLength={104} className='prefix__color0'>
              {'23:26:02 \uF017'}
            </text>
          </g>
          <text
            textLength={8}
            className='prefix__background'
            id='prefix__g17'
          />
          <text
            textLength={104}
            fontWeight='bold'
            className='prefix__foreground'
            id='prefix__g18'
          >
            {'My Tech Stack'}
          </text>
          <text
            textLength={120}
            fontWeight='bold'
            className='prefix__foreground'
            id='prefix__g19'
          >
            {'-- Front End --'}
          </text>
          <text
            textLength={408}
            fontWeight='bold'
            className='prefix__color14'
            id='prefix__g20'
          >
            {'React, React-Hooks, Typescript, Redux, Redux-Sagas,'}
          </text>
          <text
            textLength={440}
            fontWeight='bold'
            className='prefix__color14'
            id='prefix__g21'
          >
            {'Redux-Toolkit, NextJS, Gatsby, TailwindCSS, TailwindCSS'}
          </text>
          <text
            textLength={264}
            fontWeight='bold'
            className='prefix__color14'
            id='prefix__g22'
          >
            {'SASS, styled-components, PostCSS.'}
          </text>
          <text
            textLength={112}
            fontWeight='bold'
            className='prefix__foreground'
            id='prefix__g23'
          >
            {'-- Back End --'}
          </text>
          <text
            textLength={320}
            fontWeight='bold'
            className='prefix__color10'
            id='prefix__g24'
          >
            {'NodeJS, Express, Koa, MongoDB, mongoose,'}
          </text>
          <text
            textLength={288}
            fontWeight='bold'
            className='prefix__color10'
            id='prefix__g25'
          >
            {'GraphQL, Hasura, Apollo, PostgreSQL,'}
          </text>
          <text
            textLength={264}
            fontWeight='bold'
            className='prefix__color10'
            id='prefix__g26'
          >
            {'API Development, User Auth, etc..'}
          </text>
          <text
            textLength={520}
            fontWeight='bold'
            className='prefix__foreground'
            id='prefix__g27'
          >
            {`to name a few.. PS: Click the red 🔴 to pause/play the animation :)`}
          </text>
        </defs>
        <g
          id='g-animation'
          style={{
            animationIterationCount: 'infinite',
            animationPlayState: isPlaying,
            animationDuration: '10s',
            animationName: 'roll',
            animationTimingFunction: 'steps(1,end)',
            animationFillMode: 'forwards',
          }}
        >
          <path className='prefix__foreground' d='M0 0h8v17H0z' />
          <use xlinkHref='#prefix__g1' />
          <path className='prefix__color4' d='M0 544h88v17H0z' />
          <path className='prefix__foreground' d='M104 544h8v17h-8z' />
          <path className='prefix__color0' d='M768 544h32v17h-32z' />
          <path fill='gray' d='M800 544h56v17h-56z' />
          <path className='prefix__color7' d='M856 544h104v17H856z' />
          <use xlinkHref='#prefix__g2' y={544} />
          <path className='prefix__color4' d='M0 1088h88v17H0z' />
          <path className='prefix__foreground' d='M104 1088h8v17h-8z' />
          <path className='prefix__color0' d='M768 1088h32v17h-32z' />
          <path fill='gray' d='M800 1088h56v17h-56z' />
          <path className='prefix__color7' d='M856 1088h104v17H856z' />
          <use xlinkHref='#prefix__g2' y={1088} />
          <path className='prefix__color4' d='M0 1632h88v17H0z' />
          <path className='prefix__foreground' d='M112 1632h8v17h-8z' />
          <path className='prefix__color0' d='M768 1632h32v17h-32z' />
          <path fill='gray' d='M800 1632h56v17h-56z' />
          <path className='prefix__color7' d='M856 1632h104v17H856z' />
          <use xlinkHref='#prefix__g3' y={1632} />
          <path className='prefix__color4' d='M0 2176h88v17H0z' />
          <path className='prefix__foreground' d='M120 2176h8v17h-8z' />
          <path className='prefix__color0' d='M768 2176h32v17h-32z' />
          <path fill='gray' d='M800 2176h56v17h-56z' />
          <path className='prefix__color7' d='M856 2176h104v17H856z' />
          <use xlinkHref='#prefix__g4' y={2176} />
          <g>
            <path className='prefix__color4' d='M0 2720h88v17H0z' />
            <path className='prefix__foreground' d='M128 2720h8v17h-8z' />
            <path className='prefix__color0' d='M768 2720h32v17h-32z' />
            <path fill='gray' d='M800 2720h56v17h-56z' />
            <path className='prefix__color7' d='M856 2720h104v17H856z' />
            <use xlinkHref='#prefix__g5' y={2720} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 3264h88v17H0z' />
            <path className='prefix__foreground' d='M136 3264h8v17h-8z' />
            <path className='prefix__color0' d='M768 3264h32v17h-32z' />
            <path fill='gray' d='M800 3264h56v17h-56z' />
            <path className='prefix__color7' d='M856 3264h104v17H856z' />
            <use xlinkHref='#prefix__g6' y={3264} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 3808h88v17H0z' />
            <path className='prefix__foreground' d='M144 3808h8v17h-8z' />
            <path className='prefix__color0' d='M768 3808h32v17h-32z' />
            <path fill='gray' d='M800 3808h56v17h-56z' />
            <path className='prefix__color7' d='M856 3808h104v17H856z' />
            <use xlinkHref='#prefix__g7' y={3808} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 4352h88v17H0z' />
            <path className='prefix__foreground' d='M152 4352h8v17h-8z' />
            <path className='prefix__color0' d='M768 4352h32v17h-32z' />
            <path fill='gray' d='M800 4352h56v17h-56z' />
            <path className='prefix__color7' d='M856 4352h104v17H856z' />
            <use xlinkHref='#prefix__g8' y={4352} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 4896h88v17H0z' />
            <path className='prefix__foreground' d='M160 4896h8v17h-8z' />
            <path className='prefix__color0' d='M768 4896h32v17h-32z' />
            <path fill='gray' d='M800 4896h56v17h-56z' />
            <path className='prefix__color7' d='M856 4896h104v17H856z' />
            <use xlinkHref='#prefix__g9' y={4896} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 5440h88v17H0z' />
            <path className='prefix__foreground' d='M168 5440h8v17h-8z' />
            <path className='prefix__color0' d='M768 5440h32v17h-32z' />
            <path fill='gray' d='M800 5440h56v17h-56z' />
            <path className='prefix__color7' d='M856 5440h104v17H856z' />
            <use xlinkHref='#prefix__g10' y={5440} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 5984h88v17H0z' />
            <path className='prefix__foreground' d='M176 5984h8v17h-8z' />
            <path className='prefix__color0' d='M768 5984h32v17h-32z' />
            <path fill='gray' d='M800 5984h56v17h-56z' />
            <path className='prefix__color7' d='M856 5984h104v17H856z' />
            <use xlinkHref='#prefix__g11' y={5984} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 6528h88v17H0z' />
            <path className='prefix__foreground' d='M184 6528h8v17h-8z' />
            <path className='prefix__color0' d='M768 6528h32v17h-32z' />
            <path fill='gray' d='M800 6528h56v17h-56z' />
            <path className='prefix__color7' d='M856 6528h104v17H856z' />
            <use xlinkHref='#prefix__g12' y={6528} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 7072h88v17H0z' />
            <path className='prefix__foreground' d='M192 7072h8v17h-8z' />
            <path className='prefix__color0' d='M768 7072h32v17h-32z' />
            <path fill='gray' d='M800 7072h56v17h-56z' />
            <path className='prefix__color7' d='M856 7072h104v17H856z' />
            <use xlinkHref='#prefix__g13' y={7072} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 7616h88v17H0z' />
            <path className='prefix__foreground' d='M200 7616h8v17h-8z' />
            <path className='prefix__color0' d='M768 7616h32v17h-32z' />
            <path fill='gray' d='M800 7616h56v17h-56z' />
            <path className='prefix__color7' d='M856 7616h104v17H856z' />
            <use xlinkHref='#prefix__g14' y={7616} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 8160h88v17H0z' />
            <path className='prefix__foreground' d='M208 8160h8v17h-8z' />
            <path className='prefix__color0' d='M768 8160h32v17h-32z' />
            <path fill='gray' d='M800 8160h56v17h-56z' />
            <path className='prefix__color7' d='M856 8160h104v17H856z' />
            <use xlinkHref='#prefix__g15' y={8160} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 8704h88v17H0z' />
            <path className='prefix__foreground' d='M208 8704h8v17h-8z' />
            <path className='prefix__color0' d='M768 8704h32v17h-32z' />
            <path fill='gray' d='M800 8704h56v17h-56z' />
            <path className='prefix__color7' d='M856 8704h104v17H856z' />
            <use xlinkHref='#prefix__g15' y={8704} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 9248h88v17H0z' />
            <path className='prefix__color0' d='M768 9248h32v17h-32z' />
            <path fill='gray' d='M800 9248h56v17h-56z' />
            <path className='prefix__color7' d='M856 9248h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={9248} />
            <path className='prefix__foreground' d='M0 9265h8v17H0z' />
            <use xlinkHref='#prefix__g17' y={9265} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 9792h88v17H0z' />
            <path className='prefix__color0' d='M768 9792h32v17h-32z' />
            <path fill='gray' d='M800 9792h56v17h-56z' />
            <path className='prefix__color7' d='M856 9792h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={9792} />
            <use xlinkHref='#prefix__g18' y={9809} />
            <use xlinkHref='#prefix__g19' y={9826} />
            <use xlinkHref='#prefix__g20' y={9843} />
            <use xlinkHref='#prefix__g21' y={9860} />
            <use xlinkHref='#prefix__g22' y={9877} />
            <use xlinkHref='#prefix__g23' y={9894} />
            <use xlinkHref='#prefix__g24' y={9911} />
            <use xlinkHref='#prefix__g25' y={9928} />
            <use xlinkHref='#prefix__g26' y={9945} />
            <use xlinkHref='#prefix__g27' y={9962} />
            <path className='prefix__foreground' d='M0 9979h8v17H0z' />
            <use xlinkHref='#prefix__g17' y={9979} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 10336h88v17H0z' />
            <path className='prefix__color0' d='M768 10336h32v17h-32z' />
            <path fill='gray' d='M800 10336h56v17h-56z' />
            <path className='prefix__color7' d='M856 10336h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={10336} />
            <use xlinkHref='#prefix__g18' y={10353} />
            <use xlinkHref='#prefix__g19' y={10370} />
            <use xlinkHref='#prefix__g20' y={10387} />
            <use xlinkHref='#prefix__g21' y={10404} />
            <use xlinkHref='#prefix__g22' y={10421} />
            <use xlinkHref='#prefix__g23' y={10438} />
            <use xlinkHref='#prefix__g24' y={10455} />
            <use xlinkHref='#prefix__g25' y={10472} />
            <use xlinkHref='#prefix__g26' y={10489} />
            <use xlinkHref='#prefix__g27' y={10506} />
            <path className='prefix__foreground' d='M0 10523h8v17H0z' />
            <use xlinkHref='#prefix__g28' y={10523} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 10880h88v17H0z' />
            <path className='prefix__color0' d='M768 10880h32v17h-32z' />
            <path fill='gray' d='M800 10880h56v17h-56z' />
            <path className='prefix__color7' d='M856 10880h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={10880} />
            <use xlinkHref='#prefix__g18' y={10897} />
            <use xlinkHref='#prefix__g19' y={10914} />
            <use xlinkHref='#prefix__g20' y={10931} />
            <use xlinkHref='#prefix__g21' y={10948} />
            <use xlinkHref='#prefix__g22' y={10965} />
            <use xlinkHref='#prefix__g23' y={10982} />
            <use xlinkHref='#prefix__g24' y={10999} />
            <use xlinkHref='#prefix__g25' y={11016} />
            <use xlinkHref='#prefix__g26' y={11033} />
            <use xlinkHref='#prefix__g27' y={11050} />
            <path className='prefix__foreground' d='M0 11067h8v17H0z' />
            <use xlinkHref='#prefix__g28' y={11067} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 11424h88v17H0z' />
            <path className='prefix__color0' d='M768 11424h32v17h-32z' />
            <path fill='gray' d='M800 11424h56v17h-56z' />
            <path className='prefix__color7' d='M856 11424h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={11424} />
            <use xlinkHref='#prefix__g18' y={11441} />
            <use xlinkHref='#prefix__g19' y={11458} />
            <use xlinkHref='#prefix__g20' y={11475} />
            <use xlinkHref='#prefix__g21' y={11492} />
            <use xlinkHref='#prefix__g22' y={11509} />
            <use xlinkHref='#prefix__g23' y={11526} />
            <use xlinkHref='#prefix__g24' y={11543} />
            <use xlinkHref='#prefix__g25' y={11560} />
            <use xlinkHref='#prefix__g26' y={11577} />
            <use xlinkHref='#prefix__g27' y={11594} />
            <path className='prefix__color4' d='M0 11611h88v17H0z' />
            <path className='prefix__foreground' d='M104 11611h8v17h-8z' />
            <path className='prefix__color0' d='M768 11611h32v17h-32z' />
            <path fill='gray' d='M800 11611h56v17h-56z' />
            <path className='prefix__color7' d='M856 11611h104v17H856z' />
            <use xlinkHref='#prefix__g29' y={11611} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 11968h88v17H0z' />
            <path className='prefix__color0' d='M768 11968h32v17h-32z' />
            <path fill='gray' d='M800 11968h56v17h-56z' />
            <path className='prefix__color7' d='M856 11968h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={11968} />
            <use xlinkHref='#prefix__g18' y={11985} />
            <use xlinkHref='#prefix__g19' y={12002} />
            <use xlinkHref='#prefix__g20' y={12019} />
            <use xlinkHref='#prefix__g21' y={12036} />
            <use xlinkHref='#prefix__g22' y={12053} />
            <use xlinkHref='#prefix__g23' y={12070} />
            <use xlinkHref='#prefix__g24' y={12087} />
            <use xlinkHref='#prefix__g25' y={12104} />
            <use xlinkHref='#prefix__g26' y={12121} />
            <use xlinkHref='#prefix__g27' y={12138} />
            <path className='prefix__color4' d='M0 12155h88v17H0z' />
            <path className='prefix__foreground' d='M104 12155h8v17h-8z' />
            <path className='prefix__color0' d='M768 12155h32v17h-32z' />
            <path fill='gray' d='M800 12155h56v17h-56z' />
            <path className='prefix__color7' d='M856 12155h104v17H856z' />
            <use xlinkHref='#prefix__g29' y={12155} />
          </g>
          <g>
            <path className='prefix__color4' d='M0 12512h88v17H0z' />
            <path className='prefix__color0' d='M768 12512h32v17h-32z' />
            <path fill='gray' d='M800 12512h56v17h-56z' />
            <path className='prefix__color7' d='M856 12512h104v17H856z' />
            <use xlinkHref='#prefix__g16' y={12512} />
            <use xlinkHref='#prefix__g18' y={12529} />
            <use xlinkHref='#prefix__g19' y={12546} />
            <use xlinkHref='#prefix__g20' y={12563} />
            <use xlinkHref='#prefix__g21' y={12580} />
            <use xlinkHref='#prefix__g22' y={12597} />
            <use xlinkHref='#prefix__g23' y={12614} />
            <use xlinkHref='#prefix__g24' y={12631} />
            <use xlinkHref='#prefix__g25' y={12648} />
            <use xlinkHref='#prefix__g26' y={12665} />
            <use xlinkHref='#prefix__g27' y={12682} />
            <path className='prefix__color4' d='M0 12699h88v17H0z' />
            <path className='prefix__color0' d='M768 12699h32v17h-32z' />
            <path fill='gray' d='M800 12699h56v17h-56z' />
            <path className='prefix__color7' d='M856 12699h104v17H856z' />
            <use xlinkHref='#prefix__g30' y={12699} />
            <path className='prefix__foreground' d='M0 12716h8v17H0z' />
            <use xlinkHref='#prefix__g17' y={12716} />
          </g>
        </g>
      </svg>
    </svg>
  );
}

export default SvgComponent;
