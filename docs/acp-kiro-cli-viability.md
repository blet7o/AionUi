# 在 ACP 列表中加入 `kiro-cli` 的可行性评估

## 结论（TL;DR）
- **可行性：高（前提是 `kiro-cli` 提供稳定的 ACP/stdin-stdout 协议入口）**。
- 现有架构已经将 ACP 后端配置集中在 `src/types/acpTypes.ts`，新增一个 CLI 后端通常只需要：
  1. 扩展后端类型；
  2. 在 `ACP_BACKENDS_ALL` 增加一条配置；
  3. 确认 `AcpConnection` 的 `switch` 覆盖新后端（多为 generic 分支）；
  4. 根据 `kiro-cli` 的真实启动参数设置 `acpArgs`。

## 为什么说“改动成本低”
- ACP 可检测列表来自 `ACP_BACKENDS_ALL` 的自动生成逻辑，不需要在多个地方重复维护列表。
- `AcpDetector` 会遍历 `POTENTIAL_ACP_CLIS` 自动用 `which/where` 检测安装状态。
- `AcpConnection` 对大多数 CLI 后端使用统一的 `connectGenericBackend` 启动方式。

## 关键前置验证点
在真正接入前，应确认 `kiro-cli` 至少满足以下一个启动形态：
- `kiro-cli acp`
- `kiro-cli --acp`
- 或等价的 **JSON-RPC over stdio** 入口

并验证：
- 会话初始化与消息发送方法名是否与当前 ACP 适配层兼容；
- 权限请求事件格式是否与现有 `AcpAdapter` 能够兼容；
- 中断、超时、退出码等异常路径是否可被当前连接层正确处理。

## 建议落地步骤
1. 在本机先做手工验证：
   - `kiro-cli --help`
   - 尝试 `kiro-cli acp` / `kiro-cli --acp`
2. 确认命令后，在 `ACP_BACKENDS_ALL` 新增配置并启用；
3. 补一条最小化回归测试（后端配置存在性 + detector 生成列表）；
4. 若 `kiro-cli` 的权限/模式控制与现有后端不同，再按需扩展常量或分支。

## 风险与不确定性
- 最大不确定点不是 AionUi 架构，而是 `kiro-cli` 对 ACP 的公开支持程度与参数稳定性。
- 如果 `kiro-cli` 尚未提供标准 ACP 模式，则需要额外 bridge 层（类似某些通过 npx 启动 bridge 的后端）。
