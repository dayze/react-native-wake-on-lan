@objc(WakeOnLan)
class WakeOnLan: NSObject {

  @objc(multiply:withB:withResolver:withRejecter:)
  func multiply(a: Float, b: Float, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
    resolve(a*b)
  }
    
    @objc(awake:withPort:withResolver:withRejecter:)
    func awake(macADdress: String, port: Int, resolve:RCTPromiseResolveBlock,reject:RCTPromiseRejectBlock) -> Void {
        let computer = Awake.Device(MAC: macADdress, BroadcastAddr: "255.255.255.255", Port: 9)
        resolve(Awake.target(device: computer))
    }
}
