
enum instIndexRegister {
    MOVPR,
    MOVRM,
    MOVMR,
    MVRImm,
    MVIMImm,
    INRRd,
    DCRRd
}

enum instAccumulatorGroup {
    ADDRs,
    ADDM,
    ADI,
    ADCRs,
    ADCM,
    ACI,
    SUBM,
    SUBRs,
    SUI,
    SBBRs,
    SBBM,
    SCI,
    ANARs,
    ANAM,
    ANI,
    XRARs,
    XRAM,
    XRI,
    ORARs,
    ORAM,
    ORI,
    CMPRs,
    CMPM,
    CPI,
    RLC,
    RRC,
    RAL,
    RAR, 
}

enum instProgramCounterStackControl {
    JMP,
    JNC,
    JNZ,
    JP,
    JPO,
    JC,
    JZ,
    JM,
    JPE,
    CALL,
    CNC,
    CNZ,
    CP,
    CPO,
    CC,
    CZ,
    CM,
    CPE,
    RET,
    RNC,
    RNZ,
    RP,
    RPO,
    RC,
    RZ,
    RM, 
    PRE,
    RST
}

enum instInputOutput {
    IN,
    OUT
}

enum instMachineInstructions {
    HLT,
}

export default {
    instAccumulatorGroup,
    instIndexRegister, 
    instProgramCounterStackControl,
    instInputOutput, 
    instMachineInstructions
};