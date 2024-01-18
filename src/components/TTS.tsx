
import { TextToSpeech, Positions, Sizes } from 'tts-react'
function TTS({children}) {
    return (
        <TextToSpeech
            markTextAsSpoken
            align="vertical"
            size={Sizes.SMALL}
            position={Positions.TL}>
            {children}
        </TextToSpeech>
    )
}

export default TTS