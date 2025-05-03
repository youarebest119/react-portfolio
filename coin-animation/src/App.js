import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';
import { useControls } from "leva";
function ShidoCoin() {
    const { scene } = useGLTF('/shido/Shido.glb');

    const coinRef = useRef();
    // Add rotation animation
    useFrame(() => {
        if (coinRef.current) {
            // coinRef.current.rotation.x = 1.2; // Adjust the speed as needed
            coinRef.current.rotation.y += 0.01; // Adjust the speed as needed
        }
    });

    scene.traverse((child) => {
        if (child.isMesh) {
            child.material.metalness = 1; // Maximize metalness for a shiny effect
            child.material.roughness = 0.1; // Lower roughness for sharper reflections
        }
    });

    return <primitive ref={coinRef} object={scene} />;
};

function App() {
    // Load HDRI environment map
    // const hdriTexture = useTexture('/path/to/your/hdri.hdr');

    return (
        <Canvas
            style={{ width: "100%", height: 1000 }}
            camera={{ fov: 10, position: [0, 1, 4] }}
        >
            <Suspense fallback={null}>
                {/* Environment map for realistic reflections */}
                <Environment files="/shido/environment.hdr" />

                {/* Ambient and directional lights */}
                {/* <ambientLight intensity={0.3} />
                <pointLight position={[5, 5, 5]} intensity={2} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <spotLight position={[15, 20, 10]} angle={0.3} penumbra={1} intensity={2} castShadow /> */}

                <ShidoCoin />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
}

export default App;
