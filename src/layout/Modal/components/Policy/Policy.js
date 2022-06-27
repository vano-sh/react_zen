const Policy = ({
  parentClassName,
  policy,
  isPolicyChecked,
  onPolicyChange
}) => {

  return (
    <label
      className={`${parentClassName}__policy`}
    >
      <input
        type={policy.checkbox.type}
        checked={isPolicyChecked}
        onChange={onPolicyChange}
      />
      <a href={policy.linkPolicy.url}>
        {policy.linkPolicy.data}
      </a>
    </label>
  )
}

export default Policy