import InteractiveSkateboard from './components/interactive-skateboard';

const DEFAULT_DECK_TEXTURE = '/skateboard/Deck.webp';
const DEFAULT_WHEEL_TEXTURE = '/skateboard/SkateWheel1.png';
const DEFAULT_TRUCK_COLOR = '#6F6E6A';
const DEFAULT_BOLT_COLOR = '#6F6E6A';

export default function Home() {
    const deckTextureURL = DEFAULT_DECK_TEXTURE;
    const wheelTextureURL = DEFAULT_WHEEL_TEXTURE;
    const truckColor = DEFAULT_TRUCK_COLOR;
    const boltColor = DEFAULT_BOLT_COLOR;

    return (
        <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
            <InteractiveSkateboard
                deckTextureURL={deckTextureURL}
                wheelTextureURL={wheelTextureURL}
                truckColor={truckColor}
                boltColor={boltColor}
            />
        </div>
    );
}
