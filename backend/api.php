<?php
$request = $_GET['request'] ?? '';

switch ($request) {
    case 'daemon/status':
        require_once 'controllers/DaemonController.php';
        // $daemonController = new DaemonController();
        // echo json_encode($daemonController->getStatus());
        break;

    case 'daemon/stop':
        require_once 'controllers/DaemonController.php';
        // $daemonController = new DaemonController();
        // echo json_encode($daemonController->stopDaemon());
        break;

    default:
        http_response_code(404);
        echo json_encode(["error" => "Endpoint not found"]);
}
?>