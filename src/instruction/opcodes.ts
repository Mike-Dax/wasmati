export { opcodes, nameToOpcode, InstructionName };

type Opcodes = typeof opcodes;
type NestedValue<T> = {
  [k in keyof T]: T[k] extends string ? T[k] : NestedValue<T[k]>;
}[keyof T];
type InstructionName = NestedValue<Opcodes>;

const opcodes = {
  // control
  0x00: "unreachable",
  0x01: "nop",
  0x02: "block",
  0x03: "loop",
  0x04: "if",
  // 0x05: "else", // not an instruction
  // 0x0b: "end", // not an instruction
  0x0c: "br",
  0x0d: "br_if",
  0x0e: "br_table",
  0x0f: "return",
  0x10: "call",
  0x11: "call_indirect",

  // parametric
  0x1a: "drop",
  0x1b: "select",
  0x1c: "select_t",

  // variable
  0x20: "local.get",
  0x21: "local.set",
  0x22: "local.tee",
  0x23: "global.get",
  0x24: "global.set",
  0x25: "table.get",
  0x26: "table.set",

  // memory
  0x28: "i32.load",
  0x29: "i64.load",
  0x2a: "f32.load",
  0x2b: "f64.load",
  0x2c: "i32.load8_s",
  0x2d: "i32.load8_u",
  0x2e: "i32.load16_s",
  0x2f: "i32.load16_u",
  0x30: "i64.load8_s",
  0x31: "i64.load8_u",
  0x32: "i64.load16_s",
  0x33: "i64.load16_u",
  0x34: "i64.load32_s",
  0x35: "i64.load32_u",
  0x36: "i32.store",
  0x37: "i64.store",
  0x38: "f32.store",
  0x39: "f64.store",
  0x3a: "i32.store8",
  0x3b: "i32.store16",
  0x3c: "i64.store8",
  0x3d: "i64.store16",
  0x3e: "i64.store32",
  0x3f: "memory.size",
  0x40: "memory.grow",

  // numeric
  0x41: "i32.const",
  0x42: "i64.const",
  0x43: "f32.const",
  0x44: "f64.const",

  0x45: "i32.eqz",
  0x46: "i32.eq",
  0x47: "i32.ne",
  0x48: "i32.lt_s",
  0x49: "i32.lt_u",
  0x4a: "i32.gt_s",
  0x4b: "i32.gt_u",
  0x4c: "i32.le_s",
  0x4d: "i32.le_u",
  0x4e: "i32.ge_s",
  0x4f: "i32.ge_u",

  0x50: "i64.eqz",
  0x51: "i64.eq",
  0x52: "i64.ne",
  0x53: "i64.lt_s",
  0x54: "i64.lt_u",
  0x55: "i64.gt_s",
  0x56: "i64.gt_u",
  0x57: "i64.le_s",
  0x58: "i64.le_u",
  0x59: "i64.ge_s",
  0x5a: "i64.ge_u",

  0x5b: "f32.eq",
  0x5c: "f32.ne",
  0x5d: "f32.lt",
  0x5e: "f32.gt",
  0x5f: "f32.le",
  0x60: "f32.ge",

  0x61: "f64.eq",
  0x62: "f64.ne",
  0x63: "f64.lt",
  0x64: "f64.gt",
  0x65: "f64.le",
  0x66: "f64.ge",

  0x67: "i32.clz",
  0x68: "i32.ctz",
  0x69: "i32.popcnt",

  0x6a: "i32.add",
  0x6b: "i32.sub",
  0x6c: "i32.mul",
  0x6d: "i32.div_s",
  0x6e: "i32.div_u",
  0x6f: "i32.rem_s",
  0x70: "i32.rem_u",
  0x71: "i32.and",
  0x72: "i32.or",
  0x73: "i32.xor",
  0x74: "i32.shl",
  0x75: "i32.shr_s",
  0x76: "i32.shr_u",
  0x77: "i32.rotl",
  0x78: "i32.rotr",

  0x79: "i64.clz",
  0x7a: "i64.ctz",
  0x7b: "i64.popcnt",

  0x7c: "i64.add",
  0x7d: "i64.sub",
  0x7e: "i64.mul",
  0x7f: "i64.div_s",
  0x80: "i64.div_u",
  0x81: "i64.rem_s",
  0x82: "i64.rem_u",
  0x83: "i64.and",
  0x84: "i64.or",
  0x85: "i64.xor",
  0x86: "i64.shl",
  0x87: "i64.shr_s",
  0x88: "i64.shr_u",
  0x89: "i64.rotl",
  0x8a: "i64.rotr",

  0x8b: "f32.abs",
  0x8c: "f32.neg",
  0x8d: "f32.ceil",
  0x8e: "f32.floor",
  0x8f: "f32.trunc",
  0x90: "f32.nearest",
  0x91: "f32.sqrt",

  0x92: "f32.add",
  0x93: "f32.sub",
  0x94: "f32.mul",
  0x95: "f32.div",
  0x96: "f32.min",
  0x97: "f32.max",
  0x98: "f32.copysign",

  0x99: "f64.abs",
  0x9a: "f64.neg",
  0x9b: "f64.ceil",
  0x9c: "f64.floor",
  0x9d: "f64.trunc",
  0x9e: "f64.nearest",
  0x9f: "f64.sqrt",

  0xa0: "f64.add",
  0xa1: "f64.sub",
  0xa2: "f64.mul",
  0xa3: "f64.div",
  0xa4: "f64.min",
  0xa5: "f64.max",
  0xa6: "f64.copysign",

  0xa7: "i32.wrap_i64",
  0xa8: "i32.trunc_f32_s",
  0xa9: "i32.trunc_f32_u",
  0xaa: "i32.trunc_f64_s",
  0xab: "i32.trunc_f64_u",

  0xac: "i64.extend_i32_s",
  0xad: "i64.extend_i32_u",
  0xae: "i64.trunc_f32_s",
  0xaf: "i64.trunc_f32_u",
  0xb0: "i64.trunc_f64_s",
  0xb1: "i64.trunc_f64_u",

  0xb2: "f32.convert_i32_s",
  0xb3: "f32.convert_i32_u",
  0xb4: "f32.convert_i64_s",
  0xb5: "f32.convert_i64_u",
  0xb6: "f32.demote_f64",

  0xb7: "f64.convert_i32_s",
  0xb8: "f64.convert_i32_u",
  0xb9: "f64.convert_i64_s",
  0xba: "f64.convert_i64_u",
  0xbb: "f64.promote_f32",

  0xbc: "i32.reinterpret_f32",
  0xbd: "i64.reinterpret_f64",
  0xbe: "f32.reinterpret_i32",
  0xbf: "f64.reinterpret_i64",

  0xc0: "i32.extend8_s",
  0xc1: "i32.extend16_s",
  0xc2: "i64.extend8_s",
  0xc3: "i64.extend16_s",
  0xc4: "i64.extend32_s",

  // reference
  0xd0: "ref.null",
  0xd1: "ref.is_null",
  0xd2: "ref.func",

  0xfc: {
    // saturating float to int
    0: "i32.trunc_sat_f32_s",
    1: "i32.trunc_sat_f32_u",
    2: "i32.trunc_sat_f64_s",
    3: "i32.trunc_sat_f64_u",
    4: "i64.trunc_sat_f32_s",
    5: "i64.trunc_sat_f32_u",
    6: "i64.trunc_sat_f64_s",
    7: "i64.trunc_sat_f64_u",

    // bulk memory
    8: "memory.init",
    9: "data.drop",
    10: "memory.copy",
    11: "memory.fill",
    12: "table.init",
    13: "elem.drop",
    14: "table.copy",
    15: "table.grow",
    16: "table.size",
    17: "table.fill",
  },

  // simd
  0xfd: {
    0: "v128.load",
    1: "v128.load8x8_s",
    2: "v128.load8x8_u",
    3: "v128.load16x4_s",
    4: "v128.load16x4_u",
    5: "v128.load32x2_s",
    6: "v128.load32x2_u",
    7: "v128.load8_splat",
    8: "v128.load16_splat",
    9: "v128.load32_splat",
    10: "v128.load64_splat",
    11: "v128.store",
    12: "v128.const",

    13: "i8x16.shuffle",
    14: "i8x16.swizzle",

    15: "i8x16.splat",
    16: "i16x8.splat",
    17: "i32x4.splat",
    18: "i64x2.splat",
    19: "f32x4.splat",
    20: "f64x2.splat",

    21: "i8x16.extract_lane_s",
    22: "i8x16.extract_lane_u",
    23: "i8x16.replace_lane",
    24: "i16x8.extract_lane_s",
    25: "i16x8.extract_lane_u",
    26: "i16x8.replace_lane",
    27: "i32x4.extract_lane",
    28: "i32x4.replace_lane",
    29: "i64x2.extract_lane",
    30: "i64x2.replace_lane",
    31: "f32x4.extract_lane",
    32: "f32x4.replace_lane",
    33: "f64x2.extract_lane",
    34: "f64x2.replace_lane",

    35: "i8x16.eq",
    36: "i8x16.ne",
    37: "i8x16.lt_s",
    38: "i8x16.lt_u",
    39: "i8x16.gt_s",
    40: "i8x16.gt_u",
    41: "i8x16.le_s",
    42: "i8x16.le_u",
    43: "i8x16.ge_s",
    44: "i8x16.ge_u",

    45: "i16x8.eq",
    46: "i16x8.ne",
    47: "i16x8.lt_s",
    48: "i16x8.lt_u",
    49: "i16x8.gt_s",
    50: "i16x8.gt_u",
    51: "i16x8.le_s",
    52: "i16x8.le_u",
    53: "i16x8.ge_s",
    54: "i16x8.ge_u",

    55: "i32x4.eq",
    56: "i32x4.ne",
    57: "i32x4.lt_s",
    58: "i32x4.lt_u",
    59: "i32x4.gt_s",
    60: "i32x4.gt_u",
    61: "i32x4.le_s",
    62: "i32x4.le_u",
    63: "i32x4.ge_s",
    64: "i32x4.ge_u",

    65: "f32x4.eq",
    66: "f32x4.ne",
    67: "f32x4.lt",
    68: "f32x4.gt",
    69: "f32x4.le",
    70: "f32x4.ge",

    71: "f64x2.eq",
    72: "f64x2.ne",
    73: "f64x2.lt",
    74: "f64x2.gt",
    75: "f64x2.le",
    76: "f64x2.ge",

    77: "v128.not",
    78: "v128.and",
    79: "v128.andnot",
    80: "v128.or",
    81: "v128.xor",
    82: "v128.bitselect",
    83: "v128.any_true",

    84: "v128.load8_lane",
    85: "v128.load16_lane",
    86: "v128.load32_lane",
    87: "v128.load64_lane",
    88: "v128.store8_lane",
    89: "v128.store16_lane",
    90: "v128.store32_lane",
    91: "v128.store64_lane",
    92: "v128.load32_zero",
    93: "v128.load64_zero",

    94: "f32x4.demote_f64x2_zero",
    95: "f64x2.promote_low_f32x4",

    96: "i8x16.abs",
    97: "i8x16.neg",
    98: "i8x16.popcnt",
    99: "i8x16.all_true",
    100: "i8x16.bitmask",
    101: "i8x16.narrow_i16x8_s",
    102: "i8x16.narrow_i16x8_u",

    103: "f32x4.ceil",
    104: "f32x4.floor",
    105: "f32x4.trunc",
    106: "f32x4.nearest",

    107: "i8x16.shl",
    108: "i8x16.shr_s",
    109: "i8x16.shr_u",
    110: "i8x16.add",
    111: "i8x16.add_sat_s",
    112: "i8x16.add_sat_u",
    113: "i8x16.sub",
    114: "i8x16.sub_sat_s",
    115: "i8x16.sub_sat_u",

    116: "f64x2.ceil",
    117: "f64x2.floor",

    118: "i8x16.min_s",
    119: "i8x16.min_u",
    120: "i8x16.max_s",
    121: "i8x16.max_u",

    122: "f64x2.trunc",

    123: "i8x16.avgr_u",

    124: "i16x8.extadd_pairwise_i8x16_s",
    125: "i16x8.extadd_pairwise_i8x16_u",
    126: "i32x4.extadd_pairwise_i16x8_s",
    127: "i32x4.extadd_pairwise_i16x8_u",

    128: "i16x8.abs",
    129: "i16x8.neg",
    130: "i16x8.q15mulr_sat_s",
    131: "i16x8.all_true",
    132: "i16x8.bitmask",
    133: "i16x8.narrow_i32x4_s",
    134: "i16x8.narrow_i32x4_u",
    135: "i16x8.extend_low_i8x16_s",
    136: "i16x8.extend_high_i8x16_s",
    137: "i16x8.extend_low_i8x16_u",
    138: "i16x8.extend_high_i8x16_u",
    139: "i16x8.shl",
    140: "i16x8.shr_s",
    141: "i16x8.shr_u",
    142: "i16x8.add",
    143: "i16x8.add_sat_s",
    144: "i16x8.add_sat_u",
    145: "i16x8.sub",
    146: "i16x8.sub_sat_s",
    147: "i16x8.sub_sat_u",

    148: "f64x2.nearest",

    149: "i16x8.mul",
    150: "i16x8.min_s",
    151: "i16x8.min_u",
    152: "i16x8.max_s",
    153: "i16x8.max_u",

    155: "i16x8.avgr_u",
    156: "i16x8.extmul_low_i8x16_s",
    157: "i16x8.extmul_high_i8x16_s",
    158: "i16x8.extmul_low_i8x16_u",
    159: "i16x8.extmul_high_i8x16_u",

    160: "i32x4.abs",
    161: "i32x4.neg",

    163: "i32x4.all_true",
    164: "i32x4.bitmask",

    167: "i32x4.extend_low_i16x8_s",
    168: "i32x4.extend_high_i16x8_s",
    169: "i32x4.extend_low_i16x8_u",
    170: "i32x4.extend_high_i16x8_u",
    171: "i32x4.shl",
    172: "i32x4.shr_s",
    173: "i32x4.shr_u",
    174: "i32x4.add",

    177: "i32x4.sub",

    181: "i32x4.mul",
    182: "i32x4.min_s",
    183: "i32x4.min_u",
    184: "i32x4.max_s",
    185: "i32x4.max_u",
    186: "i32x4.dot_i16x8_s",
    188: "i32x4.extmul_low_i16x8_s",
    189: "i32x4.extmul_high_i16x8_s",
    190: "i32x4.extmul_low_i16x8_u",
    191: "i32x4.extmul_high_i16x8_u",

    192: "i64x2.abs",
    193: "i64x2.neg",

    195: "i64x2.all_true",
    196: "i64x2.bitmask",

    199: "i64x2.extend_low_i32x4_s",
    200: "i64x2.extend_high_i32x4_s",
    201: "i64x2.extend_low_i32x4_u",
    202: "i64x2.extend_high_i32x4_u",
    203: "i64x2.shl",
    204: "i64x2.shr_s",
    205: "i64x2.shr_u",
    206: "i64x2.add",

    209: "i64x2.sub",

    213: "i64x2.mul",
    214: "i64x2.eq",
    215: "i64x2.ne",
    216: "i64x2.lt_s",
    217: "i64x2.gt_s",
    218: "i64x2.le_s",
    219: "i64x2.ge_s",
    220: "i64x2.extmul_low_i32x4_s",
    221: "i64x2.extmul_high_i32x4_s",
    222: "i64x2.extmul_low_i32x4_u",
    223: "i64x2.extmul_high_i32x4_u",

    224: "f32x4.abs",
    225: "f32x4.neg",

    227: "f32x4.sqrt",
    228: "f32x4.add",
    229: "f32x4.sub",
    230: "f32x4.mul",
    231: "f32x4.div",
    232: "f32x4.min",
    233: "f32x4.max",
    234: "f32x4.pmin",
    235: "f32x4.pmax",

    236: "f64x2.abs",
    237: "f64x2.neg",

    239: "f64x2.sqrt",
    240: "f64x2.add",
    241: "f64x2.sub",
    242: "f64x2.mul",
    243: "f64x2.div",
    244: "f64x2.min",
    245: "f64x2.max",
    246: "f64x2.pmin",
    247: "f64x2.pmax",

    248: "i32x4.trunc_sat_f32x4_s",
    249: "i32x4.trunc_sat_f32x4_u",
    250: "f32x4.convert_i32x4_s",
    251: "f32x4.convert_i32x4_u",
    252: "i32x4.trunc_sat_f64x2_s_zero",
    253: "i32x4.trunc_sat_f64x2_u_zero",
    254: "f64x2.convert_low_i32x4_s",
    255: "f64x2.convert_low_i32x4_u",
  },

  // threads
  0xfe: {
    0: "memory.atomic.notify",
    1: "memory.atomic.wait32",
    2: "memory.atomic.wait64",
    3: "atomic.fence",

    16: "i32.atomic.load",
    17: "i64.atomic.load",
    18: "i32.atomic.load8_u",
    19: "i32.atomic.load16_u",
    20: "i64.atomic.load8_u",
    21: "i64.atomic.load16_u",
    22: "i64.atomic.load32_u",
    23: "i32.atomic.store",
    24: "i64.atomic.store",
    25: "i32.atomic.store8",
    26: "i32.atomic.store16",
    27: "i64.atomic.store8",
    28: "i64.atomic.store16",
    29: "i64.atomic.store32",

    30: "i32.atomic.rmw.add",
    31: "i64.atomic.rmw.add",
    32: "i32.atomic.rmw8.add_u",
    33: "i32.atomic.rmw16.add_u",
    34: "i64.atomic.rmw8.add_u",
    35: "i64.atomic.rmw16.add_u",
    36: "i64.atomic.rmw32.add_u",

    37: "i32.atomic.rmw.sub",
    38: "i64.atomic.rmw.sub",
    39: "i32.atomic.rmw8.sub_u",
    40: "i32.atomic.rmw16.sub_u",
    41: "i64.atomic.rmw8.sub_u",
    42: "i64.atomic.rmw16.sub_u",
    43: "i64.atomic.rmw32.sub_u",

    44: "i32.atomic.rmw.and",
    45: "i64.atomic.rmw.and",
    46: "i32.atomic.rmw8.and_u",
    47: "i32.atomic.rmw16.and_u",
    48: "i64.atomic.rmw8.and_u",
    49: "i64.atomic.rmw16.and_u",
    50: "i64.atomic.rmw32.and_u",

    51: "i32.atomic.rmw.or",
    52: "i64.atomic.rmw.or",
    53: "i32.atomic.rmw8.or_u",
    54: "i32.atomic.rmw16.or_u",
    55: "i64.atomic.rmw8.or_u",
    56: "i64.atomic.rmw16.or_u",
    57: "i64.atomic.rmw32.or_u",

    58: "i32.atomic.rmw.xor",
    59: "i64.atomic.rmw.xor",
    60: "i32.atomic.rmw8.xor_u",
    61: "i32.atomic.rmw16.xor_u",
    62: "i64.atomic.rmw8.xor_u",
    63: "i64.atomic.rmw16.xor_u",
    64: "i64.atomic.rmw32.xor_u",

    65: "i32.atomic.rmw.xchg",
    66: "i64.atomic.rmw.xchg",
    67: "i32.atomic.rmw8.xchg_u",
    68: "i32.atomic.rmw16.xchg_u",
    69: "i64.atomic.rmw8.xchg_u",
    70: "i64.atomic.rmw16.xchg_u",
    71: "i64.atomic.rmw32.xchg_u",

    72: "i32.atomic.rmw.cmpxchg",
    73: "i64.atomic.rmw.cmpxchg",
    74: "i32.atomic.rmw8.cmpxchg_u",
    75: "i32.atomic.rmw16.cmpxchg_u",
    76: "i64.atomic.rmw8.cmpxchg_u",
    77: "i64.atomic.rmw16.cmpxchg_u",
    78: "i64.atomic.rmw32.cmpxchg_u",
  },
} as const satisfies Record<number, string | Record<number, string>>;

// inverted map
const nameToOpcode: Record<string, number | [number, number]> = {};
for (let code in opcodes) {
  let value = opcodes[Number(code) as keyof Opcodes];
  if (typeof value === "string") nameToOpcode[value] = Number(code);
  else {
    for (let code_ in value) {
      let value_ = value[Number(code_) as keyof typeof value];
      nameToOpcode[value_] = [Number(code), Number(code_)];
    }
  }
}
