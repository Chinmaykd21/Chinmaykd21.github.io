import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "../config/particle-config";

function ParticleBackground() {
  return <Particles params={ParticlesConfig}></Particles>;
}

export default ParticleBackground;
