import { scaleTime } from 'd3-scale';

export default ({
  range,
  rangeRound,
  domain,
  nice = false,
  clamp = false,
  scaleUtc = false,
}) => {
  const scale = scaleTime();

  if (range) scale.range(range)
  if (rangeRound) scale.rangeRound(rangeRound);
  if (domain) scale.domain(domain);
  if (nice) scale.nice();
  if (clamp) scale.clamp(true);
  if (scaleUtc) scale.scaleUtc();

  return scale;
}
